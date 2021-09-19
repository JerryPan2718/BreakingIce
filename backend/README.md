# Backend API

Server accepts only POST requests. 

BASE_URL = https://hackmit2021.loca.lt

## gameObject
A game is represented as JSON array of the following form:
- **<code>String</code> UUID** - Universally unique identifier for the game.
- **<code>String</code> name**
- **<code>String</code> description**
- **<code>String</code> rules**
- **<code>String</code> link** - An external hyperlink
- **<code>String</code> creatorName** - username of creator of the game.
- **<code>Integer</code> minPlayers**
- **<code>Integer</code> maxPlayers**
- **<code>Integer</code> likes**
- **<code>String[]</code> tags**

---

### addGame
Endpoint for a user to add a game to the database
###### Endpoint
```
<BASE_URL>/addGame
```
###### Parameters
- **<code>gameObject</code> game**
  - `UUID` field should be left null
The user can use tags that are already existing or add their own new tags


###### Return Format
- **<code>gameObject</code> game** - Echos payload back, with the `UUID` filled out

---

### getGame
Endpoint to return the details of a singular game, given the `UUID`.
###### Endpoint
```
<BASE_URL>/getGame
```
###### Parameters
- **<code>String</code> UUID**

###### Return Format
- **<code>gameObject</code> game**

---

### getTags
Endpoint to return a list of all tags. The frontend will suggest these tags or allow the user to make new tags
###### Endpoint
```
<BASE_URL>/getTags
```
###### Parameters
- None

###### Return Format
- **<code>String[]</code> tags**

---

### getUserProfile
Endpoint to return a user's profile. This includes the games they own and their recent likes.
###### Endpoint
```
<BASE_URL>/getUserProfile
```
###### Parameters
- **<code>String</code> username**

###### Return Format
- **<code>String</code> username**
- **<code>gameObject[]</code> ownedGames**
- **<code>gameObject[]</code> likedGames**

---

### likeGame
Endpoint for a user to like a game. If the user already liked the game, then they will un-like it. Returns a boolean which is true if the result of the operation is the user liking the game and false otherwise.
###### Endpoint
```
<BASE_URL>/likeGame
```
###### Parameters
- **<code>String</code> username**
- **<code>String</code> UUID** - UUID of the game

###### Return Format
- **<code>Boolean</code> userLikesGame**

---

### queryGames
Endpoint for a user to queryGames. The tags specified must be a subset (or complete set) of the returned games's tags. The returned games are ordered from most to least likes.
###### Endpoint
```
<BASE_URL>/queryGames
```
###### Parameters
- **<code>String[]</code> tags**


###### Return Format
- **<code>gameObject[]</code> games**

---