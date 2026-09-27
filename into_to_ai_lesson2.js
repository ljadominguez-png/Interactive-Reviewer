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
    "q": "Which activation function maps any real-valued input strictly to a value between 0 and 1?",
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
    "q": "Which activation function outputs the input directly if positive and zero otherwise?",
    "ans": "ReLU",
    "alt": ["Rectified Linear Unit"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "Which activation function transforms unnormalized prediction scores (logits) into probabilities summing up to 1?",
    "ans": "Softmax",
    "alt": ["softmax", "Softmax function"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What term refers to raw, unnormalized prediction scores before being transformed into probabilities by softmax?",
    "ans": "logits",
    "alt": ["Logits"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What parameter is a numerical value assigned to each connection that determines the strength of the connection between two neurons?",
    "ans": "weight",
    "alt": ["Weight", "weights"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What parameter added to the weighted input of a neuron allows the activation function to be shifted and enables activation even when inputs are zero?",
    "ans": "bias",
    "alt": ["Bias", "biases"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What two interdependent processes comprise the complete ANN learning process?",
    "ans": "forward propagation and back propagation",
    "alt": ["forward propagation and backpropagation", "feedforward and backpropagation"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "In the learning analogy provided in the notes, what does backpropagation correspond to for a student?",
    "ans": "student's process of correcting its mistakes",
    "alt": ["correcting mistakes", "correcting its mistakes"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What mathematical calculus rule is used in backpropagation to compute the gradient of the loss with respect to each weight and bias?",
    "ans": "chain rule",
    "alt": ["Chain Rule", "chain rule of calculus"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What optimization algorithm adjusts weights and biases in the direction that minimizes the loss function?",
    "ans": "gradient descent",
    "alt": ["Gradient Descent", "gradient descent optimization"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What hyperparameter determines the small step size by which parameters are adjusted during gradient descent?",
    "ans": "learning rate",
    "alt": ["Learning Rate", "eta"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What benchmark dataset containing 70,000 grayscale fashion product images is used as a drop-in replacement for MNIST digits?",
    "ans": "Fashion MNIST",
    "alt": ["Fashion-MNIST", "fashion mnist"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What is the image resolution (pixel dimensions) of images in the Fashion-MNIST dataset?",
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
    "q": "What Google cloud platform provides free access to GPUs and TPUs for machine learning workflows?",
    "ans": "Google Colab",
    "alt": ["Colab", "Google Colaboratory"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "How many total training samples (x_train observations) are in the Fashion-MNIST dataset?",
    "ans": "60,000",
    "alt": ["60000"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "How many test samples (x_test observations) are in the Fashion-MNIST dataset?",
    "ans": "10,000",
    "alt": ["10000"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What process transforms a multi-dimensional matrix of values into a one-dimensional vector before feeding it into dense layers?",
    "ans": "Flattening",
    "alt": ["flattening", "Flatten"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What open-source Python library was utilized in the notes to create and launch the interactive web demo for model deployment?",
    "ans": "Gradio",
    "alt": ["gradio"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What lightweight mobile/embedded deployment model format was loaded using the TensorFlow interpreter in Listing 2.9?",
    "ans": "TFLite",
    "alt": ["tflite", ".tflite", "TensorFlow Lite"]
  },
  {
    "sec": "ANN Concepts & Architecture",
    "q": "What visualization tool combines a confusion matrix with color intensity to evaluate classification performance?",
    "ans": "heat map",
    "alt": ["heatmap", "Confusion Matrix heatmap"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given an input $x_1 = 2$, weight $w_1 = 0.5$, and bias $b_1 = 0.2$, calculate the linear combination $z_1 = x_1 \\cdot w_1 + b_1$.",
    "ans": "1.2",
    "alt": ["1.20"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given an input $x_1 = 4$, weight $w_1 = -0.5$, and bias $b_1 = 1.0$, calculate $z_1$.",
    "ans": "-1",
    "alt": ["-1.0", "-1.00"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given $z_1 = 0$, evaluate the sigmoid activation $\\sigma(z_1) = \\frac{1}{1 + e^{-0}}$.",
    "ans": "0.5",
    "alt": ["0.50"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given $z_1 = 2$, what is the output of the ReLU activation function $\\text{ReLU}(z_1) = \\max(0, z_1)$?",
    "ans": "2",
    "alt": ["2.0"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given $z_1 = -4.5$, what is the output of the ReLU activation function $\\text{ReLU}(z_1)$?",
    "ans": "0",
    "alt": ["0.0"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given hidden activation $a_1 = 0.6$, weight $w_2 = 1.5$, and bias $b_2 = 0.1$, compute the linear output $z_2 = a_1 \\cdot w_2 + b_2$.",
    "ans": "1",
    "alt": ["1.0", "1.00"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given hidden activation $a_1 = 0.8$, weight $w_2 = -0.5$, and bias $b_2 = 0.4$, compute $z_2 = a_1 \\cdot w_2 + b_2$.",
    "ans": "0",
    "alt": ["0.0", "0.00"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given $z_2 = 0$, evaluate the final sigmoid prediction $\\hat{y} = \\sigma(z_2)$.",
    "ans": "0.5",
    "alt": ["0.50"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given inputs $x_1 = 1, x_2 = 2$ with weights $w_1 = 0.3, w_2 = 0.4$ and bias $b = 0.1$, calculate the total sum $z = x_1 w_1 + x_2 w_2 + b$.",
    "ans": "1.2",
    "alt": ["1.20"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given inputs $x_1 = 3, x_2 = -2$ with weights $w_1 = 0.5, w_2 = 1.0$ and bias $b = 0.5$, calculate $z = x_1 w_1 + x_2 w_2 + b$.",
    "ans": "0",
    "alt": ["0.0"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given $z = -3$, what is the output of $\\text{ReLU}(z)$?",
    "ans": "0",
    "alt": ["0.0"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given two logits $z = [0, 0]$, calculate the softmax probability for the first class: $\\frac{e^0}{e^0 + e^0}$.",
    "ans": "0.5",
    "alt": ["0.50", "1/2"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given three equal logits $[2, 2, 2]$, calculate the softmax probability for each class.",
    "ans": "0.333",
    "alt": ["1/3", "0.33", "0.3333"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given an input pixel value of 127.5, compute its normalized value scaled to the $[0, 1]$ range by dividing by 255.",
    "ans": "0.5",
    "alt": ["0.50"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given an input pixel value of 51, compute its normalized value scaled to $[0, 1]$ ($51 / 255$).",
    "ans": "0.2",
    "alt": ["0.20"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given an input pixel value of 204, compute its normalized value scaled to $[0, 1]$ ($204 / 255$).",
    "ans": "0.8",
    "alt": ["0.80"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "In a $28 \\times 28$ grayscale image, what is the total number of flattened input neurons?",
    "ans": "784",
    "alt": ["784 neurons"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "For a dense layer connecting 784 flattened inputs to 128 hidden neurons, calculate the total number of connection weights ($784 \\times 128$).",
    "ans": "100352",
    "alt": ["100,352"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "For a dense layer connecting 784 inputs to 128 neurons, what is the total number of trainable parameters (weights plus 128 biases)?",
    "ans": "100480",
    "alt": ["100,480"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "For a dense layer connecting 128 inputs to 64 neurons, calculate the number of weights ($128 \\times 64$).",
    "ans": "8192",
    "alt": ["8,192"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "For a dense layer connecting 128 inputs to 64 neurons, calculate the total parameter count including 64 biases ($8192 + 64$).",
    "ans": "8256",
    "alt": ["8,256"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "For an output layer connecting 64 inputs to 10 neurons, calculate the total number of parameters including 10 biases ($(64 \\times 10) + 10$).",
    "ans": "650",
    "alt": ["650 params", "650 parameters"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Calculate the sum of trainable parameters across all layers: $100480 + 8256 + 650$.",
    "ans": "109386",
    "alt": ["109,386"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "If an image of dimension $32 \\times 32$ is flattened, how many neurons will the input vector contain?",
    "ans": "1024",
    "alt": ["1,024"]
  },
  {
    "sec": "Forward Propagation Computations",
    "q": "Given $x = 0.5, w = -0.4, b = 0.2$, calculate the linear sum $z = x \\cdot w + b$.",
    "ans": "0",
    "alt": ["0.0"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given predicted value $\\hat{y} = 0.8$ and actual target value $y = 1.0$, calculate the error difference $e = (\\hat{y} - y)$.",
    "ans": "-0.2",
    "alt": ["-0.20"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given $\\hat{y} = 0.65$ and $y = 0.0$, calculate the prediction error $e = (\\hat{y} - y)$.",
    "ans": "0.65",
    "alt": ["+0.65"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Using the simplified squared error derivative $\\frac{\\partial L}{\\partial \\hat{y}} = (\\hat{y} - y)$, find the derivative when $\\hat{y} = 0.7$ and $y = 0.5$.",
    "ans": "0.2",
    "alt": ["0.20"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "For a sigmoid output $\\hat{y} = 0.5$, calculate the sigmoid derivative $\\frac{\\partial \\hat{y}}{\\partial z_2} = \\hat{y}(1 - \\hat{y})$.",
    "ans": "0.25",
    "alt": ["0.250"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "For a sigmoid output $\\hat{y} = 0.8$, calculate the sigmoid derivative value $\\hat{y}(1 - \\hat{y})$.",
    "ans": "0.16",
    "alt": ["0.160"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "For a sigmoid output $\\hat{y} = 0.2$, calculate the sigmoid derivative value $\\hat{y}(1 - \\hat{y})$.",
    "ans": "0.16",
    "alt": ["0.160"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given linear output $z_2 = a_1 w_2 + b_2$, what is the partial derivative $\\frac{\\partial z_2}{\\partial w_2}$?",
    "ans": "a1",
    "alt": ["a_1", "activation of previous layer", "a1"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given linear output $z_2 = a_1 w_2 + b_2$, what is the partial derivative $\\frac{\\partial z_2}{\\partial b_2}$ with respect to the bias?",
    "ans": "1",
    "alt": ["1.0", "one"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "If $\\frac{\\partial L}{\\partial \\hat{y}} = -0.2$, $\\frac{\\partial \\hat{y}}{\\partial z_2} = 0.25$, and $\\frac{\\partial z_2}{\\partial w_2} = 0.6$, calculate $\\frac{\\partial L}{\\partial w_2}$ by multiplying the three terms.",
    "ans": "-0.03",
    "alt": ["-0.030"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "If $\\frac{\\partial L}{\\partial \\hat{y}} = 0.4$, $\\frac{\\partial \\hat{y}}{\\partial z_2} = 0.2$, and $\\frac{\\partial z_2}{\\partial b_2} = 1$, calculate $\\frac{\\partial L}{\\partial b_2}$.",
    "ans": "0.08",
    "alt": ["0.080"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given current weight $w_2 = 0.5$, learning rate $\\alpha = 0.1$, and gradient $\\frac{\\partial L}{\\partial w_2} = 0.2$, compute the updated weight $w_2^{\\text{new}} = w_2 - \\alpha \\frac{\\partial L}{\\partial w_2}$.",
    "ans": "0.48",
    "alt": ["0.480"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given current weight $w_2 = 0.4$, learning rate $\\alpha = 0.05$, and gradient $\\frac{\\partial L}{\\partial w_2} = -0.4$, compute $w_2^{\\text{new}} = w_2 - \\alpha \\frac{\\partial L}{\\partial w_2}$.",
    "ans": "0.42",
    "alt": ["0.420"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given current bias $b_2 = 0.1$, learning rate $\\alpha = 0.1$, and gradient $\\frac{\\partial L}{\\partial b_2} = 0.08$, compute the updated bias $b_2^{\\text{new}} = b_2 - \\alpha \\frac{\\partial L}{\\partial b_2}$.",
    "ans": "0.092",
    "alt": ["0.0920"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given weight $w_1 = 0.8$, learning rate $\\alpha = 0.2$, and gradient $\\frac{\\partial L}{\\partial w_1} = 0.5$, compute the updated weight $w_1^{\\text{new}}$.",
    "ans": "0.7",
    "alt": ["0.70"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "What is the derivative of the ReLU activation $\\frac{d}{dz}\\text{ReLU}(z)$ for any input $z > 0$?",
    "ans": "1",
    "alt": ["1.0", "one"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "What is the derivative of the ReLU activation $\\frac{d}{dz}\\text{ReLU}(z)$ for any input $z < 0$?",
    "ans": "0",
    "alt": ["0.0", "zero"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given $z_2 = a_1 w_2 + b_2$, what is the partial derivative $\\frac{\\partial z_2}{\\partial a_1}$ with respect to the hidden unit activation?",
    "ans": "w2",
    "alt": ["w_2", "the weight w2"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "If $\\frac{\\partial L}{\\partial z_2} = 0.1$ and $w_2 = 0.5$, calculate the backpropagated gradient to the hidden activation $\\frac{\\partial L}{\\partial a_1} = \\frac{\\partial L}{\\partial z_2} \\cdot w_2$.",
    "ans": "0.05",
    "alt": ["0.050"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "If gradient $\\frac{\\partial L}{\\partial w} = 0$, how much does the weight change after gradient descent update?",
    "ans": "0",
    "alt": ["no change", "0.0", "none"]
  },
  {
    "sec": "Backward Propagation Computations",
    "q": "Given current bias $b = 0.25$, learning rate $\\alpha = 0.1$, and gradient $\\frac{\\partial L}{\\partial b} = -0.5$, calculate the new bias value.",
    "ans": "0.3",
    "alt": ["0.30"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.0, what dataset module is imported from `tf.keras.datasets` to load Fashion-MNIST?",
    "ans": "fashion_mnist",
    "alt": ["fashion_mnist.load_data()", "tf.keras.datasets.fashion_mnist"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.0, what method call loads the train and test splits into `(x_train, y_train), (x_test, y_test)`?",
    "ans": "load_data()",
    "alt": ["tf.keras.datasets.fashion_mnist.load_data()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.1, what NumPy attribute of `x_train` is printed to display `(60000, 28, 28)`?",
    "ans": "shape",
    "alt": ["x_train.shape", ".shape"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.2, which class name corresponds to label index 0 in the `class_names` list?",
    "ans": "T-shirt/top",
    "alt": ["T-shirt / top"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.2, which class name corresponds to label index 9 in the `class_names` list?",
    "ans": "Ankle boot",
    "alt": ["ankle boot"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.2, which matplotlib function sets the colormap to display grayscale images (`cmap='gray'`)?",
    "ans": "imshow",
    "alt": ["plt.imshow", "plt.imshow()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.3, what data type is specified in `.astype('float32')` before dividing by 255.0?",
    "ans": "float32",
    "alt": ["'float32'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.3, what floating-point number is `x_train` divided by to normalize pixel intensities to the $[0, 1]$ range?",
    "ans": "255.0",
    "alt": ["255"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, which Keras layer type flattens the two-dimensional $28 \\times 28$ input arrays into 1D vectors?",
    "ans": "Flatten",
    "alt": ["Flatten()", "flatten"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, what parameter tuple is passed to the Flatten layer to define image dimensions?",
    "ans": "(28, 28)",
    "alt": ["input_shape=(28, 28)"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, how many units are specified in the first Dense hidden layer?",
    "ans": "128",
    "alt": ["128 units"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, what activation string is passed to both Dense hidden layers?",
    "ans": "relu",
    "alt": ["'relu'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, how many units are specified in the second Dense hidden layer?",
    "ans": "64",
    "alt": ["64 units"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, how many units are configured in the final output Dense layer for the Fashion-MNIST classes?",
    "ans": "10",
    "alt": ["10 units"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.4, what activation function string is specified for the final Dense layer?",
    "ans": "softmax",
    "alt": ["'softmax'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.5, what optimizer string is passed to `model.compile()`?",
    "ans": "adam",
    "alt": ["'adam'", "Adam"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.5, what loss function string is used to compile the model for integer category labels?",
    "ans": "sparse_categorical_crossentropy",
    "alt": ["'sparse_categorical_crossentropy'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.5, what evaluation metric string is included in the metrics list?",
    "ans": "accuracy",
    "alt": ["'accuracy'"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.5, what method is executed to output the tabular architecture and parameter count of the model?",
    "ans": "model.summary()",
    "alt": ["summary()", ".summary()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.6, how many epochs are specified in `model.fit()`?",
    "ans": "10",
    "alt": ["epochs=10"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.6, what float value is assigned to `validation_split` to reserve 20% of training data for validation?",
    "ans": "0.2",
    "alt": ["0.20", "validation_split=0.2"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.7, what Keras model method is called on `x_test` to generate output probability predictions?",
    "ans": "model.predict(x_test)",
    "alt": ["model.predict", "predict", "predict()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.7, what is the shape tuple printed for `predictions.shape` across the 10,000 test images?",
    "ans": "(10000, 10)",
    "alt": ["(10000,10)", "(10,000, 10)"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.8, which NumPy function finds the index of the highest prediction probability along an axis?",
    "ans": "np.argmax",
    "alt": ["argmax", "numpy.argmax", "np.argmax()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.8, which scikit-learn function is imported from `sklearn.metrics` to compute the confusion matrix?",
    "ans": "confusion_matrix",
    "alt": ["confusion_matrix()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.8, what Seaborn plotting function is used to visualize the confusion matrix as a heatmap?",
    "ans": "sns.heatmap",
    "alt": ["sns.heatmap()", "heatmap"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.8, which scikit-learn function generates precision, recall, and f1-score metrics?",
    "ans": "classification_report",
    "alt": ["classification_report()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.9, what class from `tf.lite` is instantiated to load `fashion_mnist_model.tflite`?",
    "ans": "Interpreter",
    "alt": ["tf.lite.Interpreter", "tf.lite.Interpreter()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.9, what method must be called immediately on the TFLite interpreter to pre-allocate memory for tensors?",
    "ans": "allocate_tensors()",
    "alt": ["interpreter.allocate_tensors()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.10, what method is called on the TFLite interpreter to actually execute inference?",
    "ans": "interpreter.invoke()",
    "alt": ["invoke()", "invoke"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.10, which NumPy function is used to add a batch dimension at `axis=0`?",
    "ans": "np.expand_dims",
    "alt": ["expand_dims", "np.expand_dims()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.10, which NumPy function is used to remove single-dimensional entries from the output shape?",
    "ans": "np.squeeze",
    "alt": ["squeeze", "np.squeeze()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.11, what Gradio component class is configured for `output_text` to display multi-class prediction probabilities?",
    "ans": "gr.Label()",
    "alt": ["gr.Label", "Label", "Label()"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "In Listing 2.11, what method is appended to `gr.Interface(...)` to start the web application server?",
    "ans": "launch()",
    "alt": [".launch()", "launch(debug=True)", "launch"]
  },
  {
    "sec": "Hands-on Code & Implementation",
    "q": "According to the classification report in Listing 2.8, what was the overall test accuracy score achieved by the model?",
    "ans": "0.87",
    "alt": ["87%", "0.870"]
  }
]
}