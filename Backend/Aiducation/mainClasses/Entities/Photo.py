"""
    Photo class: defines a photo that will be added to a post.
    defined by:
        - an ID
        - a path to the file
        - a priority: the order of upload will be taken into consideration, 
        and the photo with priority 1 will be displayed in the card
        - the id of the announcement
"""
class Photo:
    def __init__(self, id, pth, priority, announcement):
        self.__id: int = id;
        self.__path: str = pth;
        self.priority: int = priority;
        self.__announcement: int = announcement;
    # To fetch data from the DB
    # Mainly this won't be fetched except with an announcement    
    
    @staticmethod
    def fetch(tpl):
        return Photo(*tpl);
    #setters and getters
    def getId(self):
        return self.__id;

    def getPath(self):
        return self.__path;

    def getAnnouncement(self):
        return self.__announcement;
    
    def setId(self, param):
        self.__id = param;

    def setPath(self, param):
        self.__path = param;

    def setAnnouncement(self, param):
        self.__announcement = param;
    
    #convert the object to a tuple for insertion into the DB
    def serialize(self):
        return tuple(
            self.__id,
            self.__path,
            self.priority, 
            self.__announcement
            );