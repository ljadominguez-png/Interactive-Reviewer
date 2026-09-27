window.quizRegistry = window.quizRegistry || {}
window.quizRegistry ['iai2'] = {
    title: "Introduction to Artificial Intelligence Lesson 2 Reviewer",
    data :[
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What biological structure served as the original inspiration for Artificial Neural Networks (ANN)?",
    "ans": "neurons of the biological brain",
    "alt": ["biological brain", "human brain", "biological neurons"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What are the fundamental building blocks or nodes of an Artificial Neural Network called?",
    "ans": "Artificial neurons",
    "alt": ["nodes", "artificial neuron", "neurons"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What are the three typical layers that constitute the basic structure of an ANN?",
    "ans": "input layer, hidden layers, and output layer",
    "alt": ["input layer, hidden layer, output layer", "input, hidden, output"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "In an input layer processing image data, what does the number of neurons directly equal?",
    "ans": "total number of pixels in the image",
    "alt": ["number of pixels", "pixels", "total pixels"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "For regression and binary classification tasks, how many neurons are typically present in the output layer?",
    "ans": "one",
    "alt": ["1", "single neuron"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "In a multiclass classification task, what dictates the number of neurons in the output layer?",
    "ans": "number of label categories",
    "alt": ["number of classes", "label categories", "number of labels"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "Which layers located between the input and output layers perform most of the computations and complex pattern recognition?",
    "ans": "Hidden Layers",
    "alt": ["hidden layer", "hidden layers"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What component performs nonlinear transformation to enable neural networks to learn complex representations?",
    "ans": "Activation Functions",
    "alt": ["activation function"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "Which activation function maps any real-valued input to a value between 0 and 1, making it useful for binary classification?",
    "ans": "Sigmoid Function",
    "alt": ["Sigmoid", "sigmoid"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What does the abbreviation ReLU stand for?",
    "ans": "Rectified Linear Unit",
    "alt": ["rectified linear unit"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "Which activation function is defined as a piecewise linear function that outputs the input directly if positive and zero otherwise?",
    "ans": "ReLU",
    "alt": ["Rectified Linear Unit"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "Which activation function transforms prediction scores called logits into probabilities that sum up to 1?",
    "ans": "Softmax",
    "alt": ["softmax", "Softmax function"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What term refers to prediction scores before they are transformed into probabilities by the softmax function?",
    "ans": "logits",
    "alt": ["Logits"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What numerical parameter on each connection determines the strength of the connection between two neurons?",
    "ans": "weight",
    "alt": ["Weight", "weights"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What value added to the input of a neuron allows the activation function to be shifted and enables activation even when all inputs are zero?",
    "ans": "bias",
    "alt": ["Bias", "biases"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What two interdependent processes work together to train a network in the ANN learning process?",
    "ans": "forward propagation and back propagation",
    "alt": ["forward propagation and backpropagation", "feedforward and backpropagation"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "In the student learning analogy, what does backpropagation correspond to?",
    "ans": "student's process of correcting its mistakes",
    "alt": ["correcting mistakes", "correcting its mistakes"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What calculus rule is used to compute the gradient of the loss function with respect to each weight and bias?",
    "ans": "chain rule",
    "alt": ["Chain Rule", "chain rule of calculus"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What optimization method uses computed gradients to update network parameters in the direction that minimizes loss?",
    "ans": "gradient descent",
    "alt": ["Gradient Descent", "gradient descent optimization"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What hyperparameter determines the small step amount by which parameters are adjusted during gradient descent?",
    "ans": "learning rate",
    "alt": ["Learning Rate", "alpha"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What benchmark dataset containing 70,000 grayscale fashion product images is used as a direct replacement for the original MNIST dataset?",
    "ans": "Fashion MNIST",
    "alt": ["Fashion-MNIST", "fashion mnist"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What are the pixel dimensions of the grayscale images in the Fashion MNIST dataset?",
    "ans": "28x28",
    "alt": ["28 x 28", "28 by 28", "(28, 28)"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "Who developed Keras, the high-level API of TensorFlow?",
    "ans": "Francois Chollet",
    "alt": ["François Chollet", "Francois Chollet, an AI research scientist at Google"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What hosted platform providing free access to GPUs and TPUs is utilized in the lesson to run notebooks without manual setup?",
    "ans": "Google Colab",
    "alt": ["Colab", "Google Colaboratory"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "How many total grayscale images are contained in the entire Fashion-MNIST dataset?",
    "ans": "70,000",
    "alt": ["70000"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What process transforms a multi-dimensional matrix of values into a vector of values before feeding into dense layers?",
    "ans": "Flattening",
    "alt": ["flattening", "Flatten"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What web application library is used to deploy the Fashion-MNIST image classifier online?",
    "ans": "Gradio",
    "alt": ["gradio"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What lightweight model format is loaded using tf.lite.Interpreter in Listing 2.9?",
    "ans": "TFLite",
    "alt": ["tflite", ".tflite", "TensorFlow Lite"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What visual matrix representation plotted with Seaborn displays true versus predicted labels across classes?",
    "ans": "Confusion Matrix",
    "alt": ["confusion matrix"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In the lesson example with x1 = 1, w1 = 0.5, and b1 = 1, what is the exact calculated value of z1 = w1 * x1 + b1?",
    "ans": "1.5",
    "alt": ["1.50"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 2 of forward propagation, what is the rounded value of o1 = 1 / (1 + e^(-1.5)) given in the text?",
    "ans": "0.82",
    "alt": ["0.820"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 3, using w2 = 0.25, o1 = 0.82, and b2 = 0.75, what is the computed value of z2 = 0.25 * 0.82 + 0.75?",
    "ans": "0.95",
    "alt": ["0.955", "0.950"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 4, what is the rounded output value o2 = 1 / (1 + e^(-0.95)) given as the final network prediction y_hat?",
    "ans": "0.72",
    "alt": ["0.720"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Table 2.0, what is the actual target value y associated with the predicted value y_hat = 0.721?",
    "ans": "2",
    "alt": ["2.0"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Table 2.0, what is the actual target value y associated with the predicted value y_hat = 0.725?",
    "ans": "4",
    "alt": ["4.0"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Table 2.0, what is the actual target value y associated with the predicted value y_hat = 0.727?",
    "ans": "6",
    "alt": ["6.0"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Table 2.0, what is the actual target value y associated with the predicted value y_hat = 0.728?",
    "ans": "8",
    "alt": ["8.0"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Table 2.0, what is the actual target value y associated with the predicted value y_hat = 0.729?",
    "ans": "10",
    "alt": ["10.0"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 1 of backpropagation, what is the total summed squared error E reported across the five samples?",
    "ans": "178.99",
    "alt": ["178.990"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 2.2, into what simplified expression in terms of y_hat does the sigmoid derivative dy_hat/dz2 simplify?",
    "ans": "y_hat*(1-y_hat)",
    "alt": ["y_hat * (1 - y_hat)", "y*(1-y)"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 2.3, what does the partial derivative dz2/dw2 evaluate to given z2 = w2 * o1 + b2?",
    "ans": "o1",
    "alt": ["o_1"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 2.4, what numerical gradient result is given for dE/dw2 from multiplying the intermediate factors?",
    "ans": "4046.56",
    "alt": ["4046.560"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 2.5, what does the partial derivative dz2/db2 evaluate to?",
    "ans": "1",
    "alt": ["1.0", "one"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 2.5, what numerical gradient result is given for dE/db2?",
    "ans": "890.18",
    "alt": ["890.180"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "What specific learning rate alpha value is used in Step 3 and Step 5 for updating weights and biases?",
    "ans": "0.01",
    "alt": ["0.010"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 3, what is the resulting updated value of w2 after computing 0.25 - 0.01 * 4046.56?",
    "ans": "-40.21",
    "alt": ["-40.210"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 3, what is the resulting updated value of b2 after computing 0.75 - 0.01 * 890.18?",
    "ans": "-8.15",
    "alt": ["-8.150"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 4, what does the partial derivative dz2/do1 evaluate to for the hidden connection?",
    "ans": "w2",
    "alt": ["w_2"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 4, what does the partial derivative do1/dz1 evaluate to in terms of o1?",
    "ans": "o1(1-o1)",
    "alt": ["o1*(1-o1)", "o_1(1-o_1)"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 4, what does the partial derivative dz1/dw1 evaluate to?",
    "ans": "x1",
    "alt": ["x_1"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 4, what numerical gradient result is given for dE/dw1?",
    "ans": "1301.82",
    "alt": ["1301.820"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 4, what does the partial derivative dz1/b1 evaluate to?",
    "ans": "1",
    "alt": ["1.0", "one"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 5, what is the resulting updated value of w1 after computing 0.5 - 0.01 * 1301.82?",
    "ans": "-12.51",
    "alt": ["-12.510"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Step 5, using the gradient dE/db1 = 86.78, what is the updated value of b1 after computing 1 - 0.01 * 86.78?",
    "ans": "0.13",
    "alt": ["0.130"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "According to the ReLU formula f(x) = max(0, x), what is f(4.2)?",
    "ans": "4.2",
    "alt": ["4.20"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "According to the ReLU formula f(x) = max(0, x), what is f(-2.5)?",
    "ans": "0",
    "alt": ["0.0"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "For the Sigmoid function f(x) = 1 / (1 + e^(-x)), what is f(0)?",
    "ans": "0.5",
    "alt": ["0.50"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "If two class exponents in the Softmax formula evaluate to e^(p1) = 3 and e^(p2) = 7, what is the probability for class 1: 3 / (3 + 7)?",
    "ans": "0.3",
    "alt": ["0.30"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "If class logits produce exponents e^(p1) = 1, e^(p2) = 1, e^(p3) = 2, what is the Softmax probability for class 3: 2 / (1 + 1 + 2)?",
    "ans": "0.5",
    "alt": ["0.50"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "If x1 = 2, w1 = 0.4, and b1 = 0.5, what is z1 = w1 * x1 + b1?",
    "ans": "1.3",
    "alt": ["1.30"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "If o1 = 0.5, w2 = 0.6, and b2 = 0.2, what is z2 = w2 * o1 + b2?",
    "ans": "0.5",
    "alt": ["0.50"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "If y_hat = 0.6, what is the value of the sigmoid derivative y_hat * (1 - y_hat)?",
    "ans": "0.24",
    "alt": ["0.240"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "If y_hat = 0.9, what is the value of the sigmoid derivative y_hat * (1 - y_hat)?",
    "ans": "0.09",
    "alt": ["0.090"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "How many total flattened inputs result from a 28 x 28 image input layer?",
    "ans": "784",
    "alt": ["784 inputs", "784 neurons"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "How many weight connections exist between 784 flattened inputs and 128 dense neurons (784 * 128)?",
    "ans": "100352",
    "alt": ["100,352"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Listing 2.5, what is the total number of parameters in the first dense layer including 128 biases (100352 + 128)?",
    "ans": "100480",
    "alt": ["100,480"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "How many weight connections exist between 128 neurons and 64 neurons (128 * 64)?",
    "ans": "8192",
    "alt": ["8,192"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Listing 2.5, what is the total number of parameters in dense_1 including 64 biases (8192 + 64)?",
    "ans": "8256",
    "alt": ["8,256"]
  },
  {
    "sec": "Forward & Backward Computations",
    "q": "In Listing 2.5, what is the total number of parameters in dense_2 with 64 inputs and 10 output units including biases ((64 * 10) + 10)?",
    "ans": "650",
    "alt": ["650 parameters"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.0, what function is called to import and split the dataset from tf.keras.datasets.fashion_mnist?",
    "ans": "load_data()",
    "alt": ["tf.keras.datasets.fashion_mnist.load_data()", "load_data"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.1, what is the printed shape tuple of x_train?",
    "ans": "(60000, 28, 28)",
    "alt": ["(60000,28,28)"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.1, what is the printed shape tuple of y_train?",
    "ans": "(60000,)",
    "alt": ["(60000, )"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.1, what is the printed shape tuple of x_test?",
    "ans": "(10000, 28, 28)",
    "alt": ["(10000,28,28)"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.1, what is the printed shape tuple of y_test?",
    "ans": "(10000,)",
    "alt": ["(10000, )"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.2, which apparel category is assigned to index 0 of class_names?",
    "ans": "T-shirt/top",
    "alt": ["T-shirt / top"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.2, which apparel category is assigned to index 1 of class_names?",
    "ans": "Trouser",
    "alt": ["trouser"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.2, which apparel category is assigned to index 9 of class_names?",
    "ans": "Ankle boot",
    "alt": ["ankle boot"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.2, what colormap string is passed into plt.imshow() to display grayscale images?",
    "ans": "gray",
    "alt": ["'gray'", "cmap='gray'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.3, what method converts image arrays to 32-bit floats before scaling?",
    "ans": "astype('float32')",
    "alt": [".astype('float32')", "astype"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.3, what divisor is used to scale pixel values into the [0, 1] range?",
    "ans": "255.0",
    "alt": ["255"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, what layer class is imported from tensorflow.keras.layers to flatten 2D inputs?",
    "ans": "Flatten",
    "alt": ["Flatten layer"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, what parameter tuple is specified in Flatten(input_shape=...)?",
    "ans": "(28, 28)",
    "alt": ["input_shape=(28, 28)"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, how many units are specified for the first Dense hidden layer?",
    "ans": "128",
    "alt": ["128 units"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, what activation string is given to the first Dense layer?",
    "ans": "relu",
    "alt": ["'relu'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, how many units are defined in the second Dense layer?",
    "ans": "64",
    "alt": ["64 units"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, how many units are configured in the final output Dense layer?",
    "ans": "10",
    "alt": ["10 units"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, what activation string is assigned to the 10-unit output layer?",
    "ans": "softmax",
    "alt": ["'softmax'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.5, what optimizer string is passed to model.compile()?",
    "ans": "adam",
    "alt": ["'adam'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.5, what loss function string is used for integer target labels?",
    "ans": "sparse_categorical_crossentropy",
    "alt": ["'sparse_categorical_crossentropy'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.5, what evaluation metric string is passed in the metrics list?",
    "ans": "accuracy",
    "alt": ["'accuracy'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.5, what method call outputs the layer names, output shapes, and parameter counts?",
    "ans": "model.summary()",
    "alt": [".summary()", "summary()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.5, what is the exact number of total trainable parameters displayed in the summary table?",
    "ans": "109,386",
    "alt": ["109386"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.6, how many epochs are executed in model.fit()?",
    "ans": "10",
    "alt": ["epochs=10"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.6, what float value is set for validation_split to hold out validation data?",
    "ans": "0.2",
    "alt": ["0.20", "validation_split=0.2"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.7, what method is executed on model to generate predictions on x_test?",
    "ans": "model.predict(x_test)",
    "alt": ["predict", "model.predict"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.7, what is the printed shape tuple of predictions?",
    "ans": "(10000, 10)",
    "alt": ["(10000,10)"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.8, which NumPy function is used to retrieve the class index with highest probability?",
    "ans": "np.argmax",
    "alt": ["argmax", "numpy.argmax"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.8, what function imported from sklearn.metrics computes the confusion matrix?",
    "ans": "confusion_matrix",
    "alt": ["confusion_matrix()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.8, what Seaborn function plots the heatmap of the confusion matrix?",
    "ans": "sns.heatmap",
    "alt": ["heatmap", "sns.heatmap()"]
  }
]
}