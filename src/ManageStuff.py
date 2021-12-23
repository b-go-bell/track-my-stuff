import psycopg2
import psycopg2.extras


class ManageStuff:

    def __init__(self, host, port, database, user, password):
        self.host = host
        self.port = port
        self.database = database
        self.user = user
        self.password = password
        self.connection = None
        self.cursor = None

    def connect_db(self):
        """ Connect to PostgreSQL database server """
        if self.connection is not None:
            self.connection.close()
            self.cursor.close()

        try:
            self.connection = psycopg2.connect(host=self.host, database=self.database, user=self.user,
                                               password=self.password)
            self.cursor = self.connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
            self.cursor = self.connection.cursor()
        except Exception as e:
            print(f"Failed to connect to {self.database} at {self.host}:{self.port}: {e}")

    def add_item(self, item_name, item_type):
        self.cursor.execute("INSERT INTO items (name, type) VALUES (%s, %s);", (item_name, item_type))
        self.connection.commit()

    def get_stuff(self):
        self.cursor.execute("SELECT name, type FROM items")
        return self.cursor.fetchall()


ms1 = ManageStuff("localhost", 5432, "stuff", "bridgetbell", "password")
ms1.connect_db()
ms1.add_item("chair", "furniture")
print(ms1.get_stuff())
