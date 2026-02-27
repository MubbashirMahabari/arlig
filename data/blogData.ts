export interface Blog {
  id: number;
  img: string;
  type: string;
  date: string;
  title: string;
  desc: string;
  introduction?: string;
  problem?: string;
  our_approach?: string;
  technologies?: string;
  conclusion?: string;
  author_bio?: string;
  paragraph_1?: string;
  code?: string;
  challenge?: string;
}

const blogData: Blog[] = [
  {
    id: 1,
    img: "/assets/blogs/blog_1.jpg",
    type: "Blog",
    date: "Sunday , 1 Jan 2023",
    title: "HydraFacial CRM Analytics and Performance Management Solution",
    desc: "HydraFacial needed a centralized platform to align individual employee performance with....",

    introduction: "In a fast-paced business world, managing data efficiently is critical to ensuring smooth operations. At Arlig Technologies, we embarked on a mission to streamline data for our client, a global leader in cybersecurity. This project focused on addressing challenges with duplicate records, particularly within the Salesforce ecosystem, to improve data quality and operational efficiency.",

    problem: `
  Our client faced significant challenges with duplicate records across their Salesforce instance. 
  These issues arose due to:
  - Manual Data Entry Errors: Inconsistent naming conventions and redundant information entered by users.
  - System Integrations: Data imported from multiple external systems without robust checks.
  - Legacy Data Migration: Historical records brought into Salesforce during previous system migrations.

  These duplicates affected reporting accuracy, sales forecasting, and customer engagement, leading to inefficiencies in their business processes.
  `,

    our_approach: `
  To address these challenges, we adopted an external data processing strategy using Python.

  1. External Deduplication with Python
     - Field-Based Matching Logic
     - Fuzzy Matching Algorithms (fuzzywuzzy)
     - Composite Matching Criteria

  2. Cleaning and Validating Data
     - Removed incomplete records
     - Standardized field formats
     - Applied validation rules

  3. Finding Master Record and Updating Back to Salesforce
     - Merged duplicate records
     - Deleted duplicates
     - Updated master records using Data Loader
  `,

    technologies: `
  - Salesforce
  - Python
  - Data Loader
  - VS Code
  - Excel
  `,

    conclusion: `
  The Data Streamline project highlights the importance of maintaining clean and accurate data within Salesforce. By leveraging Python scripting, we provided a scalable and sustainable deduplication solution.
  `,

    author_bio: `
    Mohammed Saad Patel
    Salesforce Developer

  -- Mohammed Saad Patel is a Salesforce Developer at Arlig Technologies specializing in data management and automation solutions. With over 3 years of experience, he has worked on complex Salesforce projects including data deduplication, workflow optimization, and AI-driven solutions.
  `,
    paragraph_1:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  },
  {
    id: 2,
    img: "/assets/blogs/blog_2.jpg",
    type: "Blog",
    date: "Sunday , 1 Jan 2023",
    title: "Streamlining Bulk Envelope Sending with DocuSign in Salesforce Using LWC and Apex",
    desc: "Learn how to send a single DocuSign envelope to multiple Salesforce contacts using LWC and Apex automation.",

    introduction: `
In many business scenarios, especially in legal or financial fields, there’s often a need to get documents signed by multiple stakeholders. DocuSign provides an easy solution for sending and managing envelopes, but sending the same envelope to numerous recipients, especially when dealing with teams or groups, can be challenging.

In this blog, we will walk through a solution built on Salesforce that leverages Lightning Web Components (LWC), Apex, and DocuSign to streamline the process of sending a single DocuSign envelope to multiple contacts associated with a record. This eliminates the need to manually send the envelope to each recipient, saving time and reducing the possibility of human error.
  `,

    problem: `
Imagine a scenario where a team works together on a project in Salesforce, and multiple contacts need to sign the same document via DocuSign. Normally, sending a DocuSign envelope to each contact would require repetitive manual steps.

For teams, this process could be cumbersome and inefficient, particularly when dealing with large groups of contacts. This blog covers how we solved this problem by automating the process of sending a single DocuSign envelope to multiple contacts from a group using Apex for backend logic and LWC for a smooth user interface.
  `,

    our_approach: `
Our solution involves creating an LWC component that allows users to select a group (managed through a junction object in Salesforce) and the desired DocuSign template.

Once a group and envelope are selected, our backend Apex code sends the envelope to all contacts in that group in a single action.

Key Components:
- Apex Controller to query groups, retrieve DocuSign templates, and send envelopes in bulk.
- LWC Component to interact with the user and trigger the bulk-send action.

Objects Used:
- Person_Group__c — Represents a group of people.
- Person_Group_Junction__c — Associates contacts with groups.
- dfsle__EnvelopeConfiguration__c — Stores DocuSign envelope templates.
  `,

    technologies: `
- Salesforce
- Apex
- Lightning Web Components (LWC)
- DocuSign Apex Toolkit (dfsle)
- BulkSendService
- ContentVersion
  `,

    code: `
public with sharing class DocuSignBulkSendController {

  @AuraEnabled(cacheable=true)
  public static List<Person_Group__c> getPersonGroups() {
      return [SELECT Id, Name FROM Person_Group__c];
  }

  @AuraEnabled(cacheable=true)
  public static List<dfsle__EnvelopeConfiguration__c> getDocuSignTemplates() {
      return [SELECT Id, Name FROM dfsle__EnvelopeConfiguration__c];
  }

  @AuraEnabled
  public static Void buildListAndSendEmail(String personGroupId, String templateId) {

      List<dfsle.Envelope> myBulkCopies = new List<dfsle.Envelope>();

      for (Person_Group_Junction__c m : [
          SELECT Id, Person__c, Person__r.Name, Person__r.Email
          FROM Person_Group_Junction__c
          WHERE Person_Group__c = :personGroupId
      ]) {

          myBulkCopies.add(dfsle.Envelope.newBulkCopy(
              dfsle.Recipient.newBulkRecipient(
                  m.Person__r.Name,
                  m.Person__r.Email,
                  new dfsle.Entity(m.Id)
              ).withRole('SignerOne')
          ));
      }

      dfsle.BulkList myList = dfsle.BulkSendService.createLists(
          new List<dfsle.BulkList> {
              dfsle.BulkList.newList(
                  'My bulk list',
                  myBulkCopies,
                  new dfsle.Entity(personGroupId)
              )
          }
      )[0];

      Id myListId = myList.id;

      dfsle__EnvelopeConfigurationDocument__c docId = [
          SELECT Id, dfsle__SourceId__c
          FROM dfsle__EnvelopeConfigurationDocument__c
          WHERE dfsle__EnvelopeConfiguration__c = :templateId
      ];

      bulkSendEnvelopes(myListId, docId.dfsle__SourceId__c);
  }

  @future(callout=true)
  public static void bulkSendEnvelopes(Id myListId, String conDocId) {

      Id myFileId = [
          SELECT Id
          FROM ContentVersion
          WHERE ContentDocumentId = :conDocId
          LIMIT 1
      ].Id;

      dfsle.Envelope myEnvelope = dfsle.BulkSendService.getDraftEnvelope(
          dfsle.DocumentService.getDocuments(
              ContentVersion.getSObjectType(),
              new Set<Id> { myFileId }
          ),
          null
      );

      dfsle.BulkSendService.sendEnvelope(myListId, myEnvelope);
  }
}
  `,

    challenge: `
Handling Bulk Envelopes:
Ensuring that multiple recipients could receive the same envelope in one go was challenging due to API limitations. Using BulkSendService and Salesforce’s efficient query mechanisms resolved this.

Error Handling:
Callouts can fail due to various reasons. By marking methods with @future(callout=true), we ensured bulk send operations were handled asynchronously and reliably.
  `,

    conclusion: `
By integrating Salesforce with DocuSign, we created a solution that allows users to efficiently send DocuSign envelopes to multiple contacts associated with a group in Salesforce.

This solution streamlines workflows, eliminates repetitive manual work, and ensures documents are signed faster with reduced human error.
  `,

    author_bio: `
Bibi Khuteja Pattewale  
5x Salesforce Certified Developer  

-- Bibi Khuteja is an accomplished Salesforce developer specializing in integrations, Lightning Web Components (LWC), and Apex development. With multiple Salesforce certifications, she focuses on building scalable automation solutions that improve business efficiency and productivity.
  `},
  {
    id: 3,
    img: "/assets/blogs/blog_3.jpg",
    type: "Case Study",
    date: "Sunday , 1 Jan 2023",
    title:
      "Streamlining Bulk Envelope Sending with DocuSign in Salesforce Using LWC ",
    desc: "In many business scenarios, especially in legal or financial fields, there’s often a need to get...",
    paragraph_1:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  },
  // {
  //   id: 4,
  //   img: "/assets/blogs/blog_1.jpg",
  //   type: "Blog",
  //   date: "Sunday , 1 Jan 2023",
  //   title: "HydraFacial CRM Analytics and Performance Management Solution",
  //   desc: "HydraFacial needed a centralized platform to align individual employee performance with....",
  //   paragraph_1:
  //     "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  // },
  {
    id: 4,
    img: "/assets/blogs/blog_2.jpg",
    type: "Case Study",
    date: "Sunday , 1 Jan 2023",
    title:
      "Data Streamline: A Salesforce-Centric Approach to Data Deduplication",
    desc: "In a fast-paced business world, managing data efficiently is critical to ensuring smooth...",
    paragraph_1:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  },
  {
    id: 5,
    img: "/assets/blogs/blog_3.jpg",
    type: "Case Study",
    date: "Sunday , 1 Jan 2023",
    title:
      "Streamlining Bulk Envelope Sending with DocuSign in Salesforce Using LWC ",
    desc: "In many business scenarios, especially in legal or financial fields, there’s often a need to get...",
    paragraph_1:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  },
  {
    id: 6,
    img: "/assets/blogs/blog_3.jpg",
    type: "Case Study",
    date: "Sunday , 1 Jan 2023",
    title:
      "Streamlining Bulk Envelope Sending with DocuSign in Salesforce Using LWC ",
    desc: "In many business scenarios, especially in legal or financial fields, there’s often a need to get...",
    paragraph_1:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  },
  // {
  //   id: 8,
  //   img: "/assets/blogs/blog_1.jpg",
  //   type: "Blog",
  //   date: "Sunday , 1 Jan 2023",
  //   title: "HydraFacial CRM Analytics and Performance Management Solution",
  //   desc: "HydraFacial needed a centralized platform to align individual employee performance with....",
  //   paragraph_1:
  //     "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  // },
  {
    id: 7,
    img: "/assets/blogs/blog_3.jpg",
    type: "Case Study",
    date: "Sunday , 1 Jan 2023",
    title:
      "Streamlining Bulk Envelope Sending with DocuSign in Salesforce Using LWC ",
    desc: "In many business scenarios, especially in legal or financial fields, there’s often a need to get...",
    paragraph_1:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  },
  // {
  //   id: 10,
  //   img: "/assets/blogs/blog_1.jpg",
  //   type: "Blog",
  //   date: "Sunday , 1 Jan 2023",
  //   title: "HydraFacial CRM Analytics and Performance Management Solution",
  //   desc: "HydraFacial needed a centralized platform to align individual employee performance with....",
  //   paragraph_1:
  //     "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  // },
  // {
  //   id: 11,
  //   img: "/assets/blogs/blog_2.jpg",
  //   type: "Blog",
  //   date: "Sunday , 1 Jan 2023",
  //   title:
  //     "Data Streamline: A Salesforce-Centric Approach to Data Deduplication",
  //   desc: "In a fast-paced business world, managing data efficiently is critical to ensuring smooth...",
  //   paragraph_1:
  //     "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  // },
];
export default blogData;
