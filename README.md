# Clean architecture API
![image](https://user-images.githubusercontent.com/32543229/162855447-a648428a-8453-4740-8884-536b3ca9c8c2.png)

Project created under hexagonal architecture and clean architecture. It is a way to separate business logic from technical implementations, using clean architecture for code organization.

At the center of the circle, we have the **Domain** or business rules. **Business rules are the reason a software system exists. They are the core functionality of an application.

Ideally, the code representing the business rules should be the heart of the system, with minor concerns connected to them. Business rules should be the most independent and immutable code in the system.

The further outside you go in the circle, the less critical the elements become and the more prone to change. In this sense, presentation and data are less important as they are implementations that can eventually be replaced.

- Clean Architecture makes it possible to easily implement a software system with a single action, reducing costs and labor time.
- Clean Architecture allows systems to communicate operational needs efficiently, making them obvious to developers. This simplifies code understanding and, therefore, aids in development and maintenance.
- Maintenance is often the most costly aspect of a software development project. Adding new features and dealing with bugs consumes a large amount of resources. On top of that, there is always the latent risk of inadvertently creating new problems while searching through the software to correct a defect. By separating the system into components and isolating those components through stable interfaces, it is possible to significantly reduce the risk of unintentional breakage.
- The clean architecture also makes the code much more testable. It is difficult to test code when there are many dependencies. But when you have a plug-in architecture, that is no longer a problem.
- Clean Architecture allows use cases to be more visible and easier to understand. Business rules are not scattered all over the place, so debugging is much easier.
- Because the use cases are decoupled from the user interface or infrastructure, it's easy to do things like change the database or web framework or even migrate to a completely new platform.

**4-layer handling:** 

1. **Entities - Enterprise business Rules** 
    1. They constitute the business logic of the software.
    2. entities are the set of related business rules that are critical to the operation of an application.
        
        An entity can be an object with methods, or it can be a set of functions and data structures, they know nothing about external layers and have no dependencies. They encapsulate the most general and high-level rules that the application would use.
        
        In simple words, **Entities are the core concepts of your business** .
        
        When something external happens, the *Entities* are the least likely to change. A change in navigation or page security, for example, is not expected to affect these objects. The entity circle should not be affected by any operational changes in any application.
        
2. **Use Cases - Application business Rules**.
    
    The *use cases* layer, which lies outside the *entities* layer, contains login and rules related to the behavior and design of the system.
    
    In simple words, **Use Cases are interactions between Entities** . 
    
    Use cases do not determine the appearance of the system to the user. Instead, they describe the rules that govern the interaction between users and Entities.
    
    Changes to this layer should not affect Entities. Changes to externalities, such as the database, user interface, or frameworks, are unlikely to affect this layer.
    
3. **Interface Adapters**.
    
    Interface adapters provide a bridge between the external world and the use cases and entities.
    
    Interface adapters or the adapter layer contain the drivers, APIs and gateways, routes. Interface adapters govern the communication flow between the external components and the back-end of the system.
    
    In simple words, **interface adapters isolate our various use cases from the tools we use** .
    
4. **Frameworks and Drivers - Infrastructure**.
    
    Also known as the **infrastructure** layer, this is the outermost layer that provides all the necessary details about frameworks, drivers and tools such as the databases we use to build our application. All the details of the system go in this layer.
    
    The infrastructure represents the external agents. This layer is where all the I/O components go: the user interface, the database, the frameworks and the devices. It is the most volatile layer because the elements contained here are most likely to change.

# Pre-requisites
- Install [Node.js](https://nodejs.org/)

# Getting started
- Clone the repository
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm run dev
```
- Run tests
```
npm run test
```
  Navigate to `http://localhost:${NODE_PORT}`
- API Document endpoints
  swagger-ui Endpoint : http://localhost:${NODE_PORT}/api-docs 

# CLI App
  - Start application
  ```
  npm run start-cli
  ```
