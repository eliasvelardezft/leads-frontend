backend repo: https://github.com/eliasvelardezft/leads

## Application Structure

- **components**: use single file components seeking to have a simple structure. As for the javascript in these files, I use the methods and objects that I expose from the **composables** to handle the UI logic. For styles, I use tailwindcss for the simplicity it provides to someone who is not very comfortable with css.
    
    From here on, the files are separated by domain, meaning that for the types of objects (lead, enrollment, course, etc.), I have a composable, an adapter (not all object types have an adapter), and a service.
    
- **composables**: in these files, I expose methods and objects to be used in the **components**. They all consist of refs and methods that call the **services** and modify the refs with the responses they receive. Before sending information to the services (and before using the service response to modify the refs), the composable calls an **adapter** that converts the information to/from the format expected/returned by the backend.
    
    I also set the error objects that I later display in the components.
    
- **adapters**: this works the same way as the backend adapters, it is used to transform the information between the formats handled by the different layers of the complete system.
    
    Here you can also find the **exception adapter** that handles the response when there was an error (try catch in the composables) and transforms it into a string to show to the user, handling most of the ways in which the backend can return an error.
    
- **services**: these objects have methods that make calls to the backend endpoints and return data to the composables.
