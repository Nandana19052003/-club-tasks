import pytesseract
from PIL import Image

# Open the image file
image1 = Image.open("cap1.png")
# Run tesseract OCR on the image
text1 = pytesseract.image_to_string(image1)
# Print the result
print(text1)


