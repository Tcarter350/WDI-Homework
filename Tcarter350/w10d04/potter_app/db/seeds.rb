# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Character.create!([{
  name: "Draco Malfoy",
  hair_colour: "Blonde",
  house: "Slytherin",
  wand: "10 inch Hawthorn and Unicorn Hair",
  patronus: "None",
  badass_rating: "4",
  image: "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG"

}, {
  name: "Albus Dumbledore",
  hair_colour: "grey",
  house: "Gryffindor",
  wand: "15 inch Elder with Thestral tail core",
  patronus: "Phoenix",
  badass_rating: "9",
  image: "https://s-media-cache-ak0.pinimg.com/564x/95/57/91/955791196c7bf60275f69ac82fe92a54.jpg"

}, {
  name: "Voldemort",
  hair_colour: "None",
  house: "Slytherin",
  wand: "13.5 inch Yew with Phoenix feather core",
  patronus: "None",
  badass_rating: "10",
  image: "https://francisjogottlieb.files.wordpress.com/2014/10/lord-voldemort.jpg"

}, {
  name: "Harry Potter",
  hair_colour: "Black",
  house: "Gryffindor",
  wand: "11 inch Holly and Phoenix Feather",
  patronus: "Stag",
  badass_rating: "6",
  image: "https://upload.wikimedia.org/wikipedia/en/4/44/HarryPotter5poster.jpg"

}, {
  name: "Hermione Granger",
  hair_colour: "Light Brown",
  house: "Gryffindor",
  wand: "10 3/4 Vinewood and Dragon Heartstring",
  patronus: "Otter",
  badass_rating: "6",
  image: "https://en.wikipedia.org/wiki/Hermione_Granger#/media/File:Hermione_Granger_poster.jpg"

}, {
  name: "Rubeus Hagrid",
  hair_colour: "Black",
  house: "None",
  wand: "16 inch Oak",
  patronus: "None",
  badass_rating: "5",
  image: "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg"
}])
