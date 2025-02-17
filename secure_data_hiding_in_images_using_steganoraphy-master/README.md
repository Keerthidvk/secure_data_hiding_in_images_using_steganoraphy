I have created an encrypted image by using steganography

**the secret code**: This is message we want to lock
and  the **passkey** is 123456
for this project


**Secure Data Hiding in Images Using Steganography**

Overview
This project demonstrates **image-based steganography**, where a secret message is hidden within an image at the pixel level. The message can later be decrypted using a valid passkey.


Features
Hide a secret message inside an image  
Encrypt the message by modifying pixel values  
Decrypt the message only with the correct passkey  
Uses **OpenCV** for image processing  


Project Structure

 Secure_Data_Hiding_In_Images_Using_Steganography
│── 📄 secure_data_hiding.py  # Main script
│── 🖼 Image.jpg              # Original image (used for encoding)
│── 🖼 encryptedImage.jpg     # Encrypted image (generated)
│── 📄 README.md              # Documentation


Installation & Setup
 **1️ Prerequisites**
- Install **Python** (>=3.7)
- Install **OpenCV** using pip:
  sh
  pip install opencv-python
  

**2️ Running the Script**
1. Place the image you want to use as a carrier (`Image.jpg`) in the project folder.
2. Open a terminal and run:
   sh
   python secure_data_hiding.py
  
3. Enter the secret message and passkey when prompted.
4. The script will generate `encryptedImage.jpg` with the hidden message.
5. Run the script again and enter the correct passkey to decrypt the message.


How It Works**
1. **Encoding**:
   - The script loads an image using OpenCV.
   - It converts each character of the secret message into a pixel value.
   - Pixels are modified in a **non-sequential** pattern to store the data.

2. **Decoding**:
   - If the correct passkey is provided, the script reads the pixel values and reconstructs the original message.


**⚠ Limitations**
🔹 Works best with **uncompressed image formats** (e.g., `.png`, `.bmp`).  
🔹 **JPEG compression** may alter pixel values and affect decryption.  
🔹 Message length is limited by the image size.  



Example Usage
Encryption

Secret Code To Unlock: hello123
Enter The Passkey: secret12
The message is now hidden inside `encryptedImage.jpg`.

Decryption

Enter passcode for Decryption: secret123
Decrypted message: hello123
Message successfully retrieved!

Security Considerations**
- The encryption is simple and does not use cryptographic methods.
- For added security, consider using **AES encryption** on the message before embedding it into the image.

