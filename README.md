# tokoijo-play

Tokopedia play clone backend for Mid Term Project Gigih Generation 3.0, made with Node.js, Express, MongoDB, Mongoose, and Prometheus.

# How to run in local

1. Clone the repository

```
git clone https://github.com/khasyah-fr/tokoijo-play.git
```

2. Install dependencies

```
cd tokoijo-play
npm install
```

3. Setup database

```
mongosh
use tokoijo-play
```

4. Run the server

```
cd src
node index.js
```

Optional:

- Run the unit test example

```
cd services
node videoService.test.js
```

- Monitor the endpoints (can use the browser)

```
GET localhost:3000/api/metrics
```

# API Structure

For the backend, I am using the routes - controllers - services - repositories - models architecture.

```
| Request |---->| router |---->| controllers |---->| services |---->| repositories |---->| models |------>| database |
                                       |
                                       |
| Response | ------<------------<-------
```

Incoming requests are routed to their respective controllers by the router. Controllers will be responsible for handling the input from HTTP requests parameters or body and outputting the HTTP responses with the appropriate status code and data. To get the data, the controllers depend on services that handle business logic. In complex business logic, services usually need more than one repository because they need to fetch several pieces of data. The repositories act as the methods we use to get data from the database. The database itself is represented by models, which are essentially the schema. Overall, this architecture offers good extensibility because of its domain-driven nature and great maintainability due to its consistent structure.

To the extent of my knowledge, the API design already adheres to RESTful API, for example, we use:

```
/api/videos/:id/comments
```

as the endpoint to get comments under a video instead of

```
/api/comments?videoId=fksfefskfjfd
```

# List API

You can access the API Specs through the gist [here](https://gist.github.com/khasyah-fr/75fd9f1a455a29df6553e94a42fd148a) or through this link: https://gist.github.com/khasyah-fr/75fd9f1a455a29df6553e94a42fd148a

# Database Structure

1. Videos collection

```
{
  _id: ObjectId,
  user_id: ObjectId,
  title: String,
  thumbnail: String,
  url: String,
  views: Number,
  created_at: Date
}
```

2. Products collection

```
{
  _id: ObjectId,
  video_id: ObjectId,
  title: String,
  price: String,
  thumbnail: String,
  url: String,
  created_at: Date
}
```

3. Comments collection

```
{
  _id: ObjectId,
  video_id: ObjectId,
  user_id: ObjectId,
  message: String,
  created_at: Date
}
```

4. Users collection

```
{
    _id: ObjectId,
    username: String,
    password: String,
    created_at: Date
}
```

We can imagine that the video is at the center of the collections relations as it is referenced by comments and products, but also need the reference of users.

# Additional Features Beside Minimum Requirements

1. We can search for products or videos using the title (case-insensitive). The endpoint's performance is also improved due to indexing.
2. Added the users collection. We can list users, find a user, and update the username.
3. Implemented database seeder so there is no need to populate the database one by one.
4. Implemented unit testing for the VideoService's getVideosByTitle method using built-in assert module.
5. Added environment variables for storing configurations using dotenv package.
6. Used Prometheus to monitor how many times the endpoints get hit.
