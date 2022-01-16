# Farm Data Solita Project 

## _A React-based Chart project_ 

[![GitHub forks](https://img.shields.io/github/forks/RR2894/Farm-Data-Assignment)](https://github.com/RR2894/Farm-Data-Assignment/network)

The intention of this project is to display farm data in dynamic charts that would highlight different information depending on what is selected. The final product was supposed to have 4 different charts, each displaying a different farm. The x-axis would be time in months, the y axis would be numerals, and the selectable variables would include pH, temperature, and rainfall.




## Installation (IntelliJ Idea recommended)

- Copy repository to IDE

- Install node.js 

- Integrate Git Bash to Intellij terminal

- Install react application with the following:

```
npx create-react-app farmsjs
``` 
 
- Install the node package chart-react2 with the following command within the react app directory 
```
cd farmsjs

npm i react-chartjs-2
```

Finally, run the command to start the server on localhost:3000

```
npm start
```




## Technologies Used


| Technology | INFO |
| ------ | ------ |
| Springboot | [https://spring.io/projects/spring-boot] |
| React.js | [https://reactjs.org/] |
| Chart.js | [https://www.chartjs.org/] |
| IntelliJ Idea | [https://www.jetbrains.com/idea/] |
| node.js | [https://nodejs.org/en/] |



# To-do / Dev's Log (Please Read)


## To-do 

- Below are the steps left to complete the project in order for it to be fully functioning as written in description.



  1- get the CSV input (either from user on the page via <input type="file" /> or by fetching them from some server, which takes it from file on the disk)

  2- parse the CSV to object/array

  3- pass the data to chart.js to actually make the chart

  4- after having the charts set up, make a loop for the CSV and have 4 charts on screen, each the number of farms. 







## Developer log

1- Started with Springboot, fullstack to use with react.js. Springboot for the backend, using AWS SDK and credentials.
Went with memory database method, and created an s3 bucket on the amazon console. Encountered error with springboot startup. Had to specify region for the bucket. Ended up discarding this method, since proceeding with chart.js meant changing most of our front end. No longer had a need for bucket or amazon console.


2- Attempted to parse CSV file data using Jackson data formatter. Created a new OrderLine class. Added the corresponding dependencies to the pom.xml. But discarded the idea of using mapper and schema. https://www.baeldung.com/java-converting-json-to-csv, https://www.baeldung.com/jackson-object-mapper-tutorial, https://www.baeldung.com/building-a-restful-web-service-with-spring-and-java-based-configuration. 


3- Failed to integrate bash into IntelliJ idea terminal. Downloaded node.js , Downloaded Git Bash, Integrated bash into IntelliJ idea by changing the shell path and start directory to match the project. https://www.youtube.com/watch?v=AEZxyND_79s. 


4- Attempted to integrate chart.js into the springboot react application. Deleted setuptests.js, logo.svg, index.css, apptest.js, In the index.js file, removed the according imports. 


5 - Backend was done successfully. Frontend implementation proved to be more challenging. 


6- Learned from examples - (https://codesandbox.io/s/twilight-waterfall-v4dw9?file=/index.tsx) (https://react-chartjs-2.netlify.app/examples/vertical-bar-chart) ()


7 - In the chart: X axis will be time, Y axis will be numeral values. Selectable variables. // Searching for ways to parse the CSV file data automatically and large scale into chart.js
