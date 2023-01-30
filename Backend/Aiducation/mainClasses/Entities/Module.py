"""
    Module class, defines a module taught in a certain class
    the values are limited and not repeated 
    (ex: math in middle school is the same as math in high school) and their number is limited

"""
class Module:
    def __init__(self, id, nom):
        self.__idModule: str = id;
        self.nomModule: str = nom;
    #fetch data from DB
    #mainly this won't be fetched alone, it will be fetched with announcement or mayber user
    @staticmethod
    def fetch(tpl):
        return Module(*tpl);
    #setters and getters
    def getId(self):
        return self.__id;
    def setId(self, param):
        self.__id = param;

    #convert the object to a tuple for insertion into the DB
    def serialise(self):
        return tuple(self.__idModule, self.nomModule);
