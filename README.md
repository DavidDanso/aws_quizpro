# AWS Quiz Pro

## Description

AWS Quiz Pro is a React application designed for personalized learning of Amazon Web Services (AWS). The app stores all question JSON data in the data folder, offering quizzes on diverse AWS services. Users can customize quizzes by selecting the number of questions they want, all within a responsive design.

## Features

1. **Diverse Quizzes**: Explore quizzes covering a wide range of AWS services and concepts. 
2. **Score Tracking**: Monitor your quiz scores and track your progress over time. 
3. **Timer**: Utilize a timer to display the remaining minutes before the quiz concludes.
4. **Responsive Design**: Experience a seamless interface on desktops, tablets, and mobile phones.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js and Yarn installed on your computer. If not, you can download Node.js [here](https://nodejs.org)
and Yarn [here](https://yarnpkg.com/lang/en/docs/install/).

### Installation

1. Fork and clone this repository to your machine

    ```
    git clone https://github.com/DavidDanso/aws_quizpro.git
    ```

2. Access the project folder

    ```
    cd aws_quizpro
    ```

3. Install the project dependencies

    ```
    yarn install
    ```

4. Start the app

    ```
    yarn start
    ```

5. Install json-server using

    ```
    yarn global add json-server
    ```

6. Run the JSON server on port 9000

    ```
    yarn run server 9000
    ```

Your app should now be running on `http://localhost:9000`.
If you decide to change the port number, ensure to update it in the useEffect within the app.js file.

## App Preview:

<table width="100%"> 
  <tr>
    <td width="50%">      
    &nbsp; 
    <br>
    <p align="center">
      Start Screen
    </p>
    <img src="https://github.com/DavidDanso/aws_quizpro/blob/main/public/ui/start-screen.png" />
    </td> 
    <td width="50%">
    <br>
    <p align="center">
      Question Screen
    </p>
    <img src="https://github.com/DavidDanso/aws_quizpro/blob/main/public/ui/question-screen.png" />
    </td>
  </tr>

  <tr>
    <td width="50%">      
    &nbsp; 
    <br>
    <p align="center">
      Correct Banner
    </p>
    <img src="https://github.com/DavidDanso/aws_quizpro/blob/main/public/ui/correct-banner.png" />
    </td> 
    <td width="50%">
    <br>
    <p align="center">
     Wrong Banner
    </p>
    <img src="https://github.com/DavidDanso/aws_quizpro/blob/main/public/ui/wrong-banner.png" />
    </td>
  </tr>

  <tr>
    <td width="50%">      
    &nbsp; 
    <br>
    <p align="center">
      Error Screen
    </p>
    <img src="https://github.com/DavidDanso/aws_quizpro/blob/main/public/ui/error-screen.png" />
    </td> 
    <td width="50%">
    <br>
    <p align="center">
     Results Screen
    </p>
    <img src="https://github.com/DavidDanso/aws_quizpro/blob/main/public/ui/result-screen.png" />
    </td>
  </tr>
</table>

## Usage

Detailed usage description go here.

## Contact

DavidDanso - davidkellybrownson@gmail.com

Project Link: [https://github.com/DavidDanso/aws_quizpro.git](https://github.com/DavidDanso/aws_quizpro.git)
