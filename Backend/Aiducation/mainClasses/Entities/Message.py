from datetime import datetime

class Message:
    def __init__(self, message, state, datesent, dateresponce, sender, receiver, announcement, reason=None):
        self.__message: str = message;
        self.__state: int = state;
        self.__reason: str = reason;
        self.__dateSent: datetime = datesent;
        self.__dateResponse: datetime = dateresponce;
        self.__sender:int = sender;
        self.__receiver:int = receiver;
        self.__announcement:int = announcement;

    #fetch data from database
    @staticmethod
    def fetch(tpl):
        return Message(*tpl);
    
    #setters and getters
    def getMessage(self):
        return self.__message;
    
    def getState(self):
        return self.__state;
    
    def getReason(self):
        return self.__reason;
    
    def getDateSent(self):
        return self.__dateSent;
    
    def getDateResponse(self):
        return self.__dateResponse;
    
    def getSender(self):
        return self.__sender;
    
    def getReceiver(self):
        return self.__receiver;
    
    def getAnnouncement(self):
        return self.__announcement;
    
    def setMessage(self, param):
        self.__message = param;
    
    def setState(self, param):
        self.__state = param;
    
    def setReason(self, param):
        self.__reason = param;
    
    def setDateSent(self, param):
        self.__dateSent = param;
    
    def setDateResponse(self, param):
        self.__dateResponse = param;
    
    def setSender(self, param):
        self.__sender = param;
    
    def setReceiver(self, param):
        self.__receiver = param;
    
    def setAnnouncement(self, param):
        self.__announcement = param;
    
    #convert object to tuple for insertion
    def serialize(self):
        return tuple(
            self.__message,
            self.__state,
            self.__reason,
            self.__dateSent.isoformat(),
            self.__dateResponse.isoformat(),
            self.__sender,
            self.__receiver,
            self.__announcement
        );