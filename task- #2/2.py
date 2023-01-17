import pytesseract
from PIL import Image

# Open the image file
image = Image.open("captcha1.jpg")
# Run tesseract OCR on the image
text = pytesseract.image_to_string(image)

# Evaluate the expression
result = eval(text)

# Print the result
print(result)
