import time

from scheduler.spreadsheet import Spreadsheet
from pyquery import PyQuery
from datetime import date
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

LEGO_IDEAS_URL = "https://ideas.lego.com/search/global_search/ideas?idea_phase=idea_gathering_support&query=&sort=top"


def run_lego_metrics():

    browser = webdriver.PhantomJS()
    browser.get(LEGO_IDEAS_URL)
    delay = 3  # seconds
    timeout = 10
    try:
        WebDriverWait(browser, delay).until(EC.presence_of_element_located((By.TAG_NAME, 'h3')))
        browser.find_element_by_xpath('//a[@class="btn btn-primary btn-alternate search-more"]').click()
        WebDriverWait(browser, timeout=timeout)
    except TimeoutException:
        print("Loading took too much time!")

    time.sleep(timeout)
    pq = PyQuery(browser.page_source)

    titles = [i.text for i in pq('h3.card-title>a')]
    supporters = [i.text.strip() for i in pq('a.project-support-value')]
    new_data = dict(zip(titles, supporters))

    spreadsheet = Spreadsheet('Lego Ideas')
    data = spreadsheet.read_table('Popular')

    today = date.today()
    new_row = [today.strftime("%d/%m/%y")]
    current_headers = data[0]
    for header in current_headers:
        if header is '':
            continue
        supporters = new_data.pop(header, '')
        new_row.append(supporters)
    for title, supporters in new_data.items():
        current_headers.append(title)
        new_row.append(supporters)
    data[0] = current_headers
    data.append(new_row)

    #check all rows are equal in size
    max_num_rows = len(current_headers)
    for row in data:
        row += ['']*(max_num_rows - len(row))

    spreadsheet.save_to_worksheet(data, 'Popular')