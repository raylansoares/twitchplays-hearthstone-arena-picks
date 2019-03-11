import pyautogui
import sys

key1 = sys.argv[1]

keyMap = {
  "C1": [500, 400],
  "C2": [780, 400],
  "C3": [1060, 400]
}


def execute():
    pyautogui.moveTo(keyMap[key1][0], keyMap[key1][1], 0.5, pyautogui.easeOutQuad)
    pyautogui.click(clicks=1, button='left')


execute()



