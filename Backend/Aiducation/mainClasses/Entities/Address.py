"""
    This is the addess class, it contains information about the address of the user, or the school where the course takes place
    it is caracterised by:
        - An Id
        - State
        - City
        - description: more details on the position
"""

class Address:
    #init function
    def __init__(self, id, state, city, description):
        self.__id = id;
        self.__state = state;
        self.__city = city;
        self.__description = description;
    
    #create object from data fetched from database
    @staticmethod
    def convert(tpl):
        return Address(*tpl);
    
    #setters and getters
    def getId(self):
        return self.__id;

    def getState(self):
        return self.__state;

    def getCity(self):
        return self.__city;

    def getDescription(self):
        return self.__description;

    def setId(self, param):
        self.__id = param;

    def setState(self, param):
        self.__state = param;

    def setCity(self, param):
        self.__city = param;

    def setDescription(self, param):
        self.__description = param;
    
    #convert the object to a tuple for insertion into database
    def serialise(self):
        return tuple(
            self.__id,
            self.__state,
            self.__city,
            self.__description
        );