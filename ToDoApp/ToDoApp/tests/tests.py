from django.test import TestCase
from django.test.runner import DiscoverRunner
from .core import *

class MyRunner(DiscoverRunner):
    def setup_databases(self, **kwargs):
        return super(MyRunner, self).setup_databases(**kwargs)

    def teardown_databases(self, old_config, **kwargs):
        return super(MyRunner, self).teardown_databases(old_config, **kwargs)
