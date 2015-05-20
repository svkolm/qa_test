class NotifyClass(object):
    @classmethod
    def send_notify(cls, text, num):
        print " %s: %s " % (text, num)
