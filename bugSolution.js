```javascript
//Correct usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { count: 1 } });
```