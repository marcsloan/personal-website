import os
import time

from scheduler.spreadsheet import Spreadsheet
from pyquery import PyQuery
from datetime import date
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

LEGO_IDEAS_URL = "https://ideas.lego.com/search/global_search/ideas?idea_phase=idea_gathering_support&query=&sort=top"

LEGO_PROFILES = ["https://ideas.lego.com/projects/35d99952-2aec-4351-9682-fc7fbb78de89",
                 "https://ideas.lego.com/projects/97586ee2-6922-483e-beec-1dff59451cf5",
                 "https://ideas.lego.com/projects/6e0a19eb-948d-4125-8a04-c5cca4f52990",
                 "https://ideas.lego.com/projects/95ed6083-e2de-4267-8571-c350ec658fda",
                 "https://ideas.lego.com/projects/921f2aff-2259-4aa1-989c-c0609f3275f1",
                 "https://ideas.lego.com/projects/f0cad07c-c63b-4d96-8132-ca6c698eb147",
                 "https://ideas.lego.com/projects/5292b8ea-523f-4afb-b04c-63922203b7ec"]

LEGO_SPREADSHEET_NAME = "Lego Ideas"
# LEGO_SPREADSHEET_NAME = "Copy of Lego Ideas"


def run_lego_metrics():

    # browser = webdriver.PhantomJS()
    path = os.path.realpath(__file__)
    # path = path.replace('analyse_lego_ideas.py', 'geckodriver')
    path = path.replace('analyse_lego_ideas.py', 'geckodriverUnix')

    # browser = webdriver.Firefox(executable_path=path)

    GOOGLE_CHROME_PATH = '/app/.apt/usr/bin/google_chrome'
    CHROMEDRIVER_PATH = '/app/.chromedriver/bin/chromedriver'

    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--disable-gpu')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.binary_location = GOOGLE_CHROME_PATH
    browser = webdriver.Chrome(execution_path=CHROMEDRIVER_PATH, chrome_options=chrome_options)
    print("it worked!")

    # options = Options()
    # options.headless = True
    # browser = webdriver.Firefox(options=options, executable_path=path)
    delay = 3  # seconds
    timeout = 10

    profiles = {}

    for profile in LEGO_PROFILES:
        browser.get(profile)
        time.sleep(delay)
        pq = PyQuery(browser.page_source)
        title = pq('.content-title>h1')[0].text.strip()
        supporters = pq('.count:first')[0].text.strip()
        profiles[title] = supporters


    # browser.get(LEGO_IDEAS_URL)
    #
    #
    # try:
    #     WebDriverWait(browser, delay).until(EC.presence_of_element_located((By.TAG_NAME, 'h3')))
    #     browser.find_element_by_xpath('//a[@class="btn btn-primary btn-alternate search-more"]').click()
    #     WebDriverWait(browser, timeout=timeout)
    # except TimeoutException:
    #     print("Loading took too much time!")
    #
    # time.sleep(timeout)
    # pq = PyQuery(browser.page_source)
    #
    # titles = [i.text for i in pq('h3.card-title>a')]
    # supporters = [i.text.strip() for i in pq('a.project-support-value')]

    listing_index = ""
    # try:
    #     listing_index = titles.index("Vintage Lego Topographical Map")+1
    # except ValueError:
    #     listing_index = ""

    new_data = {}
    # new_data = dict(zip(titles, supporters))
    new_data["Vintage Lego Topographical Map Position"] = listing_index

    new_data.update(profiles)

    spreadsheet = Spreadsheet(LEGO_SPREADSHEET_NAME)
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