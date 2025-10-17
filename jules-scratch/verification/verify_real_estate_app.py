from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Navigate to the home page
    page.goto("http://localhost:5173")
    page.wait_for_load_state("networkidle")
    page.screenshot(path="jules-scratch/verification/home_page.png")

    # Click on the first property
    page.get_by_role("link").first.click()
    page.wait_for_url("http://localhost:5173/property/1")

    # Take a screenshot of the details page
    page.screenshot(path="jules-scratch/verification/details_page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)