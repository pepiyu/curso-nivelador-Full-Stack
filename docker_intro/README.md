# Cowsay


Cowsay is a farm cow that talks about animals and says random messages.

 ______________________________________________________________________________________________________________________________________________________________________________________________________
< Hello Human. I'm a talky farm cow and I know all about animals. Add an animal name in your URL using '/' (/dinosaurs, /dog, /cat, etc). I also talk about random philosophy. Add in your URL /random >
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        \   ^__^
         \  (oO)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||


This is a fork from
<a href="https://github.com/eblancoh/curso-nivelador-Full-Stack">eblancoh/curso-nivelador-Full-Stack</a>


## Installation

* Docker
* Node.js (NPM)
* Git

Clone the repository to your machine using CLI:

```
git clone https://github.com/pepiyu/curso-nivelador-Full-Stack
```

## Create the image


```
cd path/to/the/project
```

Create the Docker image:

```
docker build . -t pepiyu/cowsay
```
## Launch the container
```
docker run -p 49160:8080 -d pepiyu/cowsay
```

## Stop the container
```
docker stop pepiyu/cowsay
```

## Resume a previously-stopped container
```
docker start pepiyu/cowsay
```

## Remove image
```
docker rmi pepiyu/cowsay:latest
```


![myImage](https://media.giphy.com/media/XRB1uf2F9bGOA/giphy.gif)
