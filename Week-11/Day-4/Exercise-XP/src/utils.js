export default function generateRandomID() {
  const min = 1000; // Minimum 4-digit number (inclusive)
  const max = 9999; // Maximum 4-digit number (inclusive)

  const randomID = Math.floor(Math.random() * (max - min + 1) + min);
  return randomID.toString();
}

export function getThatKeyFromList(value,array){
  for(let item of array){
    return item;
  }
}


export function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 

    return `rgb(${r}, ${g}, ${b})`;
  }


export function isAllLetters(inputString) {
  const lettersRegex = /^[A-Za-z]+$/;

  return lettersRegex.test(inputString);
}

export const posts = [ 
    {
        "id": 1,
        "title": "Hello World",
        "content": "Try Reactjs is awesome. Can't wait to learn more",
        "date": "12-04-2017",
        "slug": "hello-world"
    },
    {
        "id": 2,
        "title": "Setup React",
        "content": "Setting up react is easy. Learn more about it!",
        "date": "1-28-2018",
        "slug": "setup-react"
    }
]


const apiUrl = 'https://webhook.site/9dece788-7612-40c2-8a35-cbcd3b0d7a56';

export async function fetchData() {
  const headers = {
    'Content-Type': 'application/json',
  };

  const jsonData = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(jsonData),
      mode: 'no-cors', // Add the 'no-cors' option
    });

    const responseData = await response.text(); // Get the raw response as text

    console.log('Response from the server:', responseData,response);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



export const someData = {
"SocialMedias": [

  "https://github.com/",
  "https://www.linkedin.com/",
  "https://www.facebook.com/"
],

"Experiences": [
    {
      "companyName": "Demo1 Technologies",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      "url": "https://www.google.com/",
      "roles": [
        {
          "title": "Full Stack Developer",
          "description": "Built and updated various Chrome Extensions.",
          "startDate": "2017-01-01",
          "endDate": "2017-05-01",
          "location": "New York, USA"
        }
      ]
    },
    {
      "companyName": "Demo2 Technologies",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      "url": "https://www.google.com/",
      "roles": [
        {
          "title": "UI Designer",
          "description": "Design user-fridendly web page",
          "startDate": "2016-05-01",
          "endDate": "2016-09-01",
          "location": "Beijing, China"
        }
      ]
    }
  ],

  "Skills": [
    {
      "Area": "Programming Language",
      "SkillSet": [
        {
          "Name": "Java",
          "Hot": true
        },
        {
          "Name": "C#",
          "Hot": false
        },
        {
          "Name": "Python",
          "Hot": false
        }
      ]
    },
    {
      "Area": "Web-Based Application Development",
      "SkillSet": [
        {
          "Name": "JavaScript (ES5, ES6)",
          "Hot": true
        },
        {
          "Name": "TypeScript",
          "Hot": false
        },
        {
          "Name": "HTML5",
          "Hot": true
        },
        {
          "Name": "CSS (SCSS/SASS)",
          "Hot": true
        },
        {
          "Name": "React",
          "Hot": true
        }
      ]
    }      
  ]

}

