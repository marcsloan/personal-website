import gspread
from django.conf import settings


class Spreadsheet:
    """
        Instructions for connecting to your spreadsheet
        1) Make sure you have the "analytics_credentials.json" file stored locally. Ask Andy or Marc for a copy
        2) Create your spreadsheet in Google Drive
        3) In the spreadsheet, click 'Share' and share it with contextscout@appspot.gserviceaccount.com
            3a) Make sure that contextscout@appspot.gserviceaccount.com has editing rights
            3b) Make sure that the document has a unique name
        4) Now you're good to go, just use the document's name when instantiating this Class
    """

    def __init__(self, spreadsheet_name):
        creds = settings.ANALYTICS_CREDENTIALS
        client = gspread.authorize(creds)

        self.sheet = client.open(spreadsheet_name)

    def save_to_worksheet(self, table, name, force_resize=False):
        if len(table) == 0 or len(table[0]) == 0:
            raise Exception("Spreadsheet can only work with table-like arrays")

        num_rows = len(table)
        num_cols = len(table[0])

        if name in [worksheet.title for worksheet in self.sheet.worksheets()]:
            worksheet = self.sheet.worksheet(name)
            if force_resize:
                worksheet.resize(rows=num_rows, cols=num_cols)
            else:
                worksheet.resize(rows=max(num_rows, worksheet.row_count), cols=max(num_cols, worksheet.col_count))
        else:
            worksheet = self.sheet.add_worksheet(title=name, rows=num_rows, cols=num_cols)

        table_range = worksheet.range(self._create_range(1, 1, num_rows, num_cols))
        for cell in range(0, len(table_range)):
            table_range[cell].value = table[(int(cell / num_cols)) % num_rows][cell % num_cols]
        worksheet.update_cells(table_range)

    def _create_range(self, start_row, start_col, end_row, end_col):
        return "%s%d:%s%d" % (self._get_col_letter(start_col), start_row, self._get_col_letter(end_col), end_row)

    def _get_col_letter(self, col):
        string = ""
        while col > 0:
            col, remainder = divmod(col - 1, 26)
            string = chr(65 + remainder) + string
        return string

    def read_table(self, name):
        if name in [worksheet.title for worksheet in self.sheet.worksheets()]:
            worksheet = self.sheet.worksheet(name)
            return worksheet.get_all_values()
        else:
            return []

    def read_table_with_column_headers(self, name):
        table = self.read_table(name)
        if len(table) == 0:
            return table
        column_headers = table[0]
        new_table = []
        for row_num in range(1, len(table)):
            row = table[row_num]
            new_table.append({column_headers[i]: row[i] for i in range(0, len(column_headers))})
        return new_table
