from django.test import TestCase

from ToDoApp.core.utils import MyUsefulClass

class MyUsefulClassTests(TestCase):

    def setUp(self):
        super(MyUsefulClassTests, self).setUp()

    def tearDown(self):
        super(MyUsefulClassTests, self).tearDown()

    def test_first(self):
        self.assertEqual(True, False)
