# Weid

## Description

<strong>Weid</strong> is a mobile application made to accommodate the hard of hearing community while traveling by providing an alternative form of communication to audio announcements via visual and sensory notifications. 

After a handful of peers separately voiced frustration in the difficulties of navigating airports as hard of hearing individuals due to the large portion of loud speaker announcements, an idea was sparked to solve this problem with an app.

In addition to airports, many other transportation environments make important announcements over loudspeakers, creating a stressful challenge for hard of hearing individuals while traveling, and putting them at risk of missing out on important information.

We designed <strong>Weid</strong> to be a centralized tool that delivers alternative means of communication with its users, providing visual and sensory notifications to supplement audio announcements while users navigate airports, train stations, and various other environments.

By doing so, <strong>Weid</strong> allows user’s to enjoy comfort, confidence, and social inclusion while traveling by mitigating confusion and exclusion in an industry that currently relies heavily on audio only announcements.

Here some research about user needs and other solutions available in the market: Please refer to the "User Research.pdf" from our repository.
[User Research](https://github.com/gooliajulia/Hard-of-Hearing-Hackathon/blob/main/User%20Research.pdf)


## USE 
Weid offers 4 key functionalities for its users:
- Create an account and user profile with customizable app and notification settings
- Search and discover 'Places' (Locations + Services Weid connects with to offer notification services) 
- Subscribe to receive important information from saved 'Places' in a feed format on User's home screen
- Add 'Trips' to receive timely and important information about a Trip like flight delays and boarding announcements. 


DEPLOYED LINK:


## Table of Contents

- [Planning](#planning)
- [Technologies Used](#technologies)
- [Wireframes and Models](#wireframes)
- [Our Team](#team)

## Planning

1. Brainstorm
To develop our idea we used the following...
- Personal stories
- Girls in Tech: Hard of Hearing Hackathon Guidelines and Suggestions [Hackathon](https://hard-of-hearing-hackathon.devpost.com/)
- National Deaf Center website and resources [NDC](https://www.nationaldeafcenter.org/)
- Contacted a number of organizations associated with the hard of hearing community

2. Research

3. Design & Planning



- DESCRIPTION
  ![NAME OF IMAGE](/IMG.png)
- DESCRIPTION
  ![NAME OF IMAGE](/IMG.png)
- DESCRIPTION
  ![NAME OF IMAGE](/IMG.png)



```
File Tree Structure:
src/
  |__ components/
    |__ Modal/
    |__ Button/
  |__ banners/
    |__ FeedItem.jsx/
    |__ TripAlert.jsx/
    |__ Places.jsx/
    |__ Trips.jsx
  |__ layout/
    |__ Layout.jsx
    |__ Header.jsx
    |__ BottomNav/
  |__ screens/
    |__ Landing.jsx/
    |__ Register.jsx/
    |__ SignIn.jsx/
    |__ Home.jsx/
    |__ Profile.jsx/
    |__ EditProfile.jsx/
    |__ Settings.jsx/
    |__ Place.jsx/
    |__ Trip.jsx/
    |__ EditTrip.jsx/
  |__ services
    |__ api/
      |__ apiConfig.js
      |__ users.js
      |__ places.js
```

## Technologies

In order to build the app we used:

|    Back-End    |  Front-End   | Planning & Mgmt. |
| :------------: | :----------: | :-------------: |
|    Nodemon     |     React    |      Slack      |
|     BCrypt     |     SCSS     |  Google Drive   |
|      Cors      |     Axios    |      Figma      |
|    Express     | React Router |      Zoom       |
| JSON Web Token |              |                 |
|    Mongoose    |              |                 |
|     Morgan     |              |                 |

## Wireframes


## Go-to-market and challenges

Phase 1: 
The first business goal is to perform a feasibility study with the US market, since a high number of population has smartphone and internet connection. An initial investment will be needed to develop the MVP. After the development of the app, the focus will be set on getting users through marketing campaigns. These will be financed by partnerships with transportation companies such as airports and train stations.

Phase 2:
The results from phase 1 will be used as a blueprint for the second phase, which as the focus on bringing the product to Europe. Transportation companies and other organizations in Europe will find it attractive to partner up with Weid, since they need to comply with the upcoming Accessibility Concept Standard that will be adopted by 2025. Please refer to the "Regulations.pdf" for more information [Regulations](https://github.com/gooliajulia/Hard-of-Hearing-Hackathon/blob/main/Regulations.pdf)

By scaling to other countries the development team at Weid will have more user experience data that will help to refine the product to make it more accessible and functional for the users. As part of the expansion, Weid will analyze further use cases (MINDMAP) to implement in the product and with that roll-out future product versions. 

Finally Weid will perform user research to target other audiences as frequent travelers which could benefit from the app. 

The long-term strategy to create revenue is to close advertising contracts with companies and add advertisement banners in the app.  

Challenges: 
- It could be hard to get users at firts, but by partnering with organizations that are associated with deaf community Weid could reach a larger population. 
- The design of the app may not be intuitive for the user, but thanks to the user data retrieved by the sign in functionality Weid could track user interaction and adapt the app to meet the needs. 
- Some partners may not facilitate the required feeds to utilize it in the app. Weid would need to partner up with the companies and convince them of building their infrastructure. With the arising focus on social inclusion through upcoming standards and Weid could convince companies to partner up. 


## Team

| Name | Role | LinkedIn | GitHub |
|:----:|:--------:|:-------:| :----:|
| Sofía Martinez | Project Manager | [LinkedIn](https://www.linkedin.com/in/sofia-martinez-gomez-8b5534136/)| 
| Julia Dwyer | Full-Stack Engineer |[LinkedIn](https://www.linkedin.com/in/julia-dwyer-software-engineer/)| [GitHub](https://github.com/gooliajulia)|



