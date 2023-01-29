"""
    Category class: defines the category of the course taught
    it takes 12 values only starting from 1 -> first year in primary school to 12 -> 3rd year in high school
    cycle takes three values: primary school, middle school or high school
    level depends on the cycle.
"""

class Category:
    def __init__(self, id, cycle, level):
        self.__idCategory = id;
        self.cycle = cycle;
        self.level = level;
    
    #fetching data from database
    #mainly this won't be fetched only with another object
    def fetch(tpl):
        return Category(*tpl);
    
    def getId(self):
        return self.__id;

    #convert the object to a tuple for insertion into the DB
    def serialize(self):
        return tuple(
            self.__idCategory,
            self.cycle,
            self.level
        );