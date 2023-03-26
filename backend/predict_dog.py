import sys
from keras.models import load_model
import cv2
import numpy as np

# Load the saved model
model = load_model('./dog.model(newOptimiser2)')

# Load the image you want to classify
imgPath = sys.argv[1]
img = cv2.imread(imgPath)
img = cv2.resize(img, (130, 130))
img = np.reshape(img, [1, 130, 130, 3])

def prediction_process(prediction):
    if prediction[0][0] > prediction[0][1]:
        print("Manges")
    else:
        print("Ringworm")
prediction = model.predict(img)
disease = prediction_process(prediction)