
"""
    This class defines the structure of a post.
    the post has:
        - An Id
        - A description (must be less than 1024 letters)
        - The price of the announced course
        - The location of the school where the course takes place
        - The user who posted it
        - The contact information of the user are included in the User class
        - Category defines the level of pupils whom the course is addressed
        - Module defines the module couvered in the course
"""

from . import User, Module, Address

class Post:
    #init function
    def __init__(self, id, description, price, user, idModule, nomModule, 
    #idCategory, cycle, level, 
    idAddress, state, city, descriptionAddress):
        self.__id: int = id;
        self.description: str = description;
        self.__price: int = price;
        self.__location: Address.Address = Address.Address(idAddress, state, city, descriptionAddress);
        self.user: User.User = user;
        #self.category: Category.Category = Category.Category(idCategory, cycle, level);   # Not sure about it
        self.module: Module.Module = Module.Module(idModule, nomModule);
    
    #create an object from data fetched from the database
    #sql query like select * from POSTS, MODULES, CATEGORIES, ADDRESSES where POSTS.idModule=MODULES.idModules and POSTS.idAddress=ADDRESSES.idAdddress
    @staticmethod
    def __init__(tpl):
        #just call the __init__ function on the unpacked version of the tuple tpl
        return Post(*tpl);

    #setters and getters for private variables
    def getId(self):
        return self.__id;
    
    def getPrice(self):
        return self.__price;

    def getLocation(self):
        return self.__location;
    
    def setId(self, param):
        self.__id = param;
        return 0;
    
    def setPrice(self, param):
        self.__price = param;
        return 0;

    def setLocation(self, param):
        self.__location = param;
        return 0;
    
    #This function to convert the object to a tuple of values for storing in a database
    def serialize(self):
        tpl = tuple(
        self.__id,
        self.description,
        self.__price,
        self.__location,
        self.user,
        self.category,
        self.module.getId(), 
        self.__location
        );
        return tpl;