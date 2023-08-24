# AMMAR - Mohamed Amine 
## F2I - MongoDB - Node.js

## Article.js
#### les champs de l'article sont:
- title
- price
- author
- releaseDate
- category
- description

## Seed.js
#### Générer 3 articles de test dans la base de données
il faut lancer la commande suivante:
```
node seed.js
```

## index.js
### Lancement de projet.
```
node index.js
```

## Exercice 1: 
#### Affichage de tous les articles enregistrés dans la base de données.
il faut aller sur le lien suivant:
```
http://localhost:3000/articles
```

## Exercice 2:
#### Suppression d'un article de la base de données.
il faut lancer une requête DELETE sur le lien suivant:
```
http://localhost:3000/articles/delete/:id
```


## Exercice 3:
#### Modification d'un article de la base de données.
il faut lancer une requête PUT sur le lien suivant:
```
http://localhost:3000/articles/update/:id
```
Avec cette requête, il faut envoyer un objet JSON avec les champs à modifier par exemple.
```
{
"title": "Updated Title",
"price": 39.99
}
```