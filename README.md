# FRÉZO discord bot
A discord bot that allows to send messages in FRÉZO.

## Commands list
Afficher les aides
> ```/frezo```
> ```/frezo -h```
> ```/frezo -help```
Écrire en Frézo simplifié
> ```/frezo -s [message]```
Écrire en Frézo traditionnel
> ```/frezo [message]```
> ```/frezo -t [message]```
Écrire en Frézo traditionnel avec décorateur
> ```/frezo -t ![decorateur] [message]```
Écrire en Frézo traditionnel avec des décorateurs de début et de fin de texte différents
> ```/frezo -t ![deco_debut] ![deco_fin] [message]```
Le décorateur simple [] peut s'utiliser juste en indiquant un point d'exclamation et sans préciser le décorateur.
> ```/frezo -t ! [message]```
> ```/frezo -t ![deco_debut] ! [message]```
> ```/frezo -t ! ![deco_fin] [message]```
Choisir la police d'écriture
> ```/frezo -s ?[police] [message]```
Forcer le début du message si le message ne commence pas par une lettre
> ```/frezo -s /[message]```
