"""
    This is the user class, it defines an account that will allow the user to interact with Aiducation
    This class has the following properties:
        - an Id
        - First Name and Family name
        - Birthdate to help defining his age <might be deleted after>
        - email to help logging in and to allow other to contact him/her/it
        - Phone number to help others call him
        - Landline number if it is a private school
        - Password: used to log in
        - profile picture
"""

from . import Address

class User:
    #init function
    def __init__(self, id, firstName, familyName, 
    birthDate, email, password, phoneNumber, 
    landLineNumber, profilePicLink, idAddress=None, state=None, city=None, description=None):
        self.__idUser = id;
        self.__firstName = firstName;
        self.__familyName = familyName;
        self.__birthDate = birthDate;
        self.__email = email;
        self.__password = password;
        self.__phoneNumber = phoneNumber;
        self.__landlineNumber = landLineNumber;
        self.__porfilePicLink = profilePicLink;
        self.address = Address.Address(idAddress, state, city, description);
    
    #init function when fetching from db
    #fetching is done by similar instruction to select * from USER, ADDRESS where USER.idUser=ADDRESS.idAddress
    # like that it will fetch all data required to instantiate the User object and its address attribute
    @staticmethod
    def fetch(tpl):
        return User(*tpl);
    
    #setters and getters
    def getIdUser(self):
        return self.__idUser
    
    def getfirstName(self):
        return self.__firstName
    
    def getfamilyName(self):
        return self.__familyName
    
    def getBirthDate(self):
        return self.__birthDate
    
    def getEmail(self):
        return self.__email

    def getPassword(self):
        return self.__password
    
    def getPhoneNumber(self):
        return self.__phoneNumber
    
    def getLandLineNumber(self):
        return self.__landlineNumber
    
    def setIdUser(self, param):
        self.__idUser = param
    
    def setfirstName(self, param):
        self.__firstName = param
    
    def setfamilyName(self, param):
        self.__familyName = param
    
    def setBirthDate(self, param):
        self.__birthDate = param
    
    def setEmail(self, param):
        self.__email = param

    def setPassword(self, param):
        self.__password = param
    
    def setPhoneNumber(self, param):
        self.__phoneNumber = param
    
    def setLandLineNumber(self, param):
        self.__landlineNumber = param
    
    #create a tuple to insert into the database
    def serialise(self):
        return tuple(
            self.__idUser,
            self.__firstName,
            self.__familyName,
            self.__birthDate,
            self.__email,
            self.__password,
            self.__phoneNumber,
            self.__landlineNumber,
            self.__porfilePicLink,
            self.address.getId()
        );