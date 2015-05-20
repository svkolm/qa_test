from .notify import NotifyClass

class MyUsefulClass:
    instances = {}

    def __init__(self, level):
        self.level = level
        self.params = []

    def append(self, p):
        self.params.append(p)
        return self

    def el_numeros(self):
        return [p % self.level for p in self.params]

    @classmethod
    def add_number(cls, param, level=10):
        if isinstance(param, int):
            if param>level:
                NotifyClass.send_notify("greater than", param)
            else:
                NotifyClass.send_notify("lower than", param)
            if not cls.instances[level]:
                cls.instancel[level] = MyUsefulClass(level)
            return cls.instances[level].append(param)
        else:
            raise Exception("Wrong parameter passed")

    @classmethod
    def get_all_levels(cls):
        return { lvl: c.el_numeros() for lvl, c in instances.iteritems()}
