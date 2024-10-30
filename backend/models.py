from myapp import database

class Test(database.Model):
    __tablename__ = 'test'

    id = database.Column(database.Integer, primary_key=True)
    name = database.Column(database.String(50), nullable=False)

    def __repr__(self):
        return f'<Test {self.name}>'