window.quizRegistry = window.quizRegistry || {}
window.quizRegistry ['iai'] = {
    title: "Introduction to Artificial Intelligence Lesson 3 Reviewer",
    data :[
  {
    "sec": "Computer Vision",
    "q": "What field of AI enables computers to interpret and understand visual data like images and videos?",
    "ans": "Computer vision",
    "alt": [
      "Computer Vision"
    ]
  },
  {
    "sec": "Digital Image",
    "q": "What is defined as a numerical representation of a visual scene in the form of a matrix or grid of numbers?",
    "ans": "Digital image",
    "alt": [
      "Digital Image"
    ]
  },
  {
    "sec": "Digital Image",
    "q": "What fundamental range of pixel values represents intensity, color, and brightness in digital images?",
    "ans": "0 to 255",
    "alt": [
      "0-255"
    ]
  },
  {
    "sec": "Grayscale Image",
    "q": "How many channels does a grayscale image use to store intensity information?",
    "ans": "1 channel",
    "alt": [
      "1",
      "One",
      "One channel"
    ]
  },
  {
    "sec": "Grayscale Image",
    "q": "In a grayscale image, what pixel intensity value represents pure black?",
    "ans": "0",
    "alt": []
  },
  {
    "sec": "Grayscale Image",
    "q": "In a grayscale image, what pixel intensity value represents pure white?",
    "ans": "255",
    "alt": []
  },
  {
    "sec": "Grayscale Image",
    "q": "What alternative term is often used synonymously with grayscale images?",
    "ans": "Monochrome",
    "alt": [
      "Monochrome image"
    ]
  },
  {
    "sec": "Grayscale Image",
    "q": "Which advantage of grayscale images refers to smaller file sizes resulting in lower memory usage and faster processing?",
    "ans": "Efficiency",
    "alt": []
  },
  {
    "sec": "Grayscale Image",
    "q": "Which advantage allows neural network algorithms to examine features like texture, edges, and contrast without color distractions?",
    "ans": "Focus on Detail",
    "alt": [
      "Focus on detail"
    ]
  },
  {
    "sec": "Color Image",
    "q": "How many individual channel images are stacked together to form a standard color image?",
    "ans": "3 channels",
    "alt": [
      "3",
      "Three",
      "Three channels"
    ]
  },
  {
    "sec": "Color Image",
    "q": "What common three-channel abbreviation stands for Red, Green, and Blue in color images?",
    "ans": "RGB",
    "alt": [
      "RGB images"
    ]
  },
  {
    "sec": "Convolutional Neural Networks",
    "q": "Which neural network architecture is specifically designed for processing structured grid data like images?",
    "ans": "Convolutional Neural Network",
    "alt": [
      "CNN",
      "Convolutional Neural Networks"
    ]
  },
  {
    "sec": "Convolutional Neural Networks",
    "q": "Unlike traditional networks that flatten images into a list of pixels, what key geometric relationships between pixels do CNNs leverage?",
    "ans": "Spatial relationships",
    "alt": [
      "Spatial relationship"
    ]
  },
  {
    "sec": "Convolution Operation",
    "q": "What mathematical operation merges two functions to produce a third function by sliding a window over input data?",
    "ans": "Convolution",
    "alt": [
      "Convolution operation"
    ]
  },
  {
    "sec": "Convolution Operation",
    "q": "What small matrix containing weights is slided over an input array during a convolution operation?",
    "ans": "Kernel",
    "alt": [
      "Filter"
    ]
  },
  {
    "sec": "Convolution Operation",
    "q": "What is the name of the transformed output array generated after completing a convolution operation?",
    "ans": "Feature map",
    "alt": [
      "Feature Map",
      "Convolved feature"
    ]
  },
  {
    "sec": "Convolution Operation",
    "q": "What arithmetic operation is performed between the kernel elements and input values at each position before summing them?",
    "ans": "Element-wise multiplication",
    "alt": [
      "Element-wise product"
    ]
  },
  {
    "sec": "Stride and Padding",
    "q": "What term refers to the number of rows and columns traversed per slide during a convolution or pooling operation?",
    "ans": "Stride",
    "alt": []
  },
  {
    "sec": "Stride and Padding",
    "q": "What process adds extra rows and columns around the boundaries of an input image to prevent drastic size reduction?",
    "ans": "Padding",
    "alt": []
  },
  {
    "sec": "Stride and Padding",
    "q": "What is the most commonly used numeric value inserted into boundary rows and columns during padding?",
    "ans": "0",
    "alt": [
      "Zero"
    ]
  },
  {
    "sec": "Feature Map Formula",
    "q": "In the feature map dimension formula m = ⌊(n - k + 2p)/s + 1⌋, what variable represents the kernel size?",
    "ans": "k",
    "alt": []
  },
  {
    "sec": "Feature Map Formula",
    "q": "In the feature map dimension formula m = ⌊(n - k + 2p)/s + 1⌋, what variable represents the original input image size?",
    "ans": "n",
    "alt": []
  },
  {
    "sec": "Feature Map Formula",
    "q": "In the feature map dimension formula m = ⌊(n - k + 2p)/s + 1⌋, what variable represents the padding size?",
    "ans": "p",
    "alt": []
  },
  {
    "sec": "Feature Map Formula",
    "q": "In the feature map dimension formula m = ⌊(n - k + 2p)/s + 1⌋, what variable represents the stride count?",
    "ans": "s",
    "alt": []
  },
  {
    "sec": "Pooling Operation",
    "q": "Which operation down-samples spatial representations and mitigates sensitivity of convolutional layers to location?",
    "ans": "Pooling operation",
    "alt": [
      "Pooling"
    ]
  },
  {
    "sec": "Pooling Operation",
    "q": "Unlike convolution, what component is noticeably absent in a pooling operation?",
    "ans": "Kernels or filters",
    "alt": [
      "Kernel",
      "Filter",
      "Kernels"
    ]
  },
  {
    "sec": "Pooling Operation",
    "q": "What is the sliding window called that moves over regions of an input image to calculate pooling output?",
    "ans": "Pooling window",
    "alt": []
  },
  {
    "sec": "Pooling Operation",
    "q": "Which type of pooling operation extracts the largest value present within the active window area?",
    "ans": "Max Pooling",
    "alt": [
      "Max pooling"
    ]
  },
  {
    "sec": "Pooling Operation",
    "q": "Which type of pooling operation extracts the smallest value present within the active window area?",
    "ans": "Min Pooling",
    "alt": [
      "Min pooling"
    ]
  },
  {
    "sec": "Pooling Operation",
    "q": "Which type of pooling operation calculates the mean value of all elements contained within the sliding window?",
    "ans": "Average Pooling",
    "alt": [
      "Average pooling"
    ]
  },
  {
    "sec": "Convolution Example",
    "q": "What is the resulting output size when convolving a 4x4 input matrix with a 2x2 kernel using a stride of 1 and no padding?",
    "ans": "3 by 3",
    "alt": [
      "3x3",
      "3 by 3 matrix"
    ]
  },
  {
    "sec": "Convolution Example",
    "q": "Given a 2x2 input block [[1, 1], [0, 1]] and a 2x2 kernel [[1, 0], [1, 0]], what is the calculated convolution sum?",
    "ans": "1",
    "alt": []
  },
  {
    "sec": "Pooling Example",
    "q": "Given a 2x2 input window containing values [[0, 1], [3, 4]], what is the output value produced by Max Pooling?",
    "ans": "4",
    "alt": []
  },
  {
    "sec": "Pooling Example",
    "q": "Given a 2x2 input window containing values [[0, 1], [3, 4]], what is the output value produced by Average Pooling?",
    "ans": "2",
    "alt": []
  },
  {
    "sec": "Pooling Example",
    "q": "Given a 2x2 input window containing values [[1, 2], [4, 5]], what is the calculated Average Pooling value?",
    "ans": "3",
    "alt": []
  },
  {
    "sec": "Pooling Example",
    "q": "Given a 2x2 input window containing values [[3, 4], [6, 7]], what is the output value produced by Max Pooling?",
    "ans": "7",
    "alt": []
  },
  {
    "sec": "Pooling Example",
    "q": "Given a 2x2 input window containing values [[3, 4], [6, 7]], what is the output value produced by Average Pooling?",
    "ans": "5",
    "alt": []
  },
  {
    "sec": "Pooling Example",
    "q": "Given a 2x2 input window containing values [[4, 5], [7, 8]], what is the calculated Average Pooling value?",
    "ans": "6",
    "alt": []
  },
  {
    "sec": "Pooling Example",
    "q": "What is the resulting feature map dimensions when applying a 2x2 pooling window across a 3x3 input matrix with a stride of 1 and no padding?",
    "ans": "2 by 2",
    "alt": [
      "2x2",
      "2 by 2 matrix"
    ]
  },
  {
    "sec": "Computer Vision Applications",
    "q": "Name one real-world domain application of computer vision mentioned in the lesson text.",
    "ans": "Autonomous vehicles",
    "alt": [
      "Medical imaging",
      "Security systems"
    ]
  },
  {
    "sec": "Computer Vision",
    "q": "What branch of artificial intelligence extracts meaningful information from visual inputs to detect defects and make decisions?",
    "ans": "Computer vision",
    "alt": [
      "Computer Vision"
    ]
  },
  {
    "sec": "Deep Learning",
    "q": "Which subfield of AI, specifically using CNNs, revolutionized computer vision through automatic feature learning?",
    "ans": "Deep learning",
    "alt": [
      "Deep Learning"
    ]
  },
  {
    "sec": "Computer Vision Tasks",
    "q": "Name one major visual recognition task advanced by deep learning mentioned in the text.",
    "ans": "Object detection",
    "alt": [
      "Image recognition",
      "Segmentation"
    ]
  },
  {
    "sec": "Digital Image",
    "q": "In a digital image matrix, what component is represented by individual row and column numeric cells?",
    "ans": "Pixel",
    "alt": [
      "Pixels",
      "Pixel value"
    ]
  },
  {
    "sec": "Grayscale Image",
    "q": "In grayscale images, pixel values measure what specific lighting attribute?",
    "ans": "Brightness",
    "alt": [
      "Amount of light",
      "Light"
    ]
  },
  {
    "sec": "Convolution Operation",
    "q": "In image processing, what is another commonly used term for a convolution kernel?",
    "ans": "Filter",
    "alt": []
  },
  {
    "sec": "Stride and Padding",
    "q": "Why would an engineer select a stride value greater than 1 during convolution?",
    "ans": "Computational efficiency",
    "alt": [
      "Down-sampling",
      "For computational efficiency or down-sampling"
    ]
  },
  {
    "sec": "Feature Map Formula",
    "q": "What mathematical rounding notation is used around the fractional expression in the feature map dimension calculation?",
    "ans": "Floor function",
    "alt": [
      "Floor",
      "Floor brackets"
    ]
  },
  {
    "sec": "General Course Info",
    "q": "What course code is designated for the Computer Vision lesson module?",
    "ans": "CSA102",
    "alt": []
  },
  {
    "sec": "Lesson Learning Objectives",
    "q": "Which deep learning model is the learner expected to understand and implement by the end of Lesson 3?",
    "ans": "Convolutional Neural Network",
    "alt": [
      "CNN"
    ]
  }

    ]
}