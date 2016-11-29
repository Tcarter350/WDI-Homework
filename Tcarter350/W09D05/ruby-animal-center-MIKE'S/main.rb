require_relative 'shelter'
require_relative 'client'
require_relative 'animal'

@shelter = Shelter.new "Battersea Dogs & Cats Home", 20

def shelter_menu
  puts `clear`
  puts "*** Welcome to #{@shelter.name} ***"
  puts "\nEnter your choice:"
  puts "\t1: Add an animal to the shelter."
  puts "\t2: List animals in shelter."
  puts "\t3: Register a client."
  puts "\t4: List registered clients."
  puts "\t5: Adopt an animal"
  puts "\t6: Give up an animal for adoption."
  puts "\tQ: Quit\n\n"
  print "---> "
  gets.chomp
end

def list_animals(shelter)
  shelter.animals.each_with_index do |animal, index|
    puts "#{index}.\t#{animal}"
  end
end

def list_clients(shelter)
  shelter.clients.each_with_index do |client, index|
    puts "#{index}.\t#{client}"
  end
end

def list_clients_animals(client)
  client.pets.each_with_index do |pet, index|
    puts "#{index}.\t#{pet}"
  end
end

response = shelter_menu
until response.upcase == "Q"
  case response
  when "1" #add animal
    puts "What's the name of the animal?"
    animal_name = gets.chomp
    puts "What's the breed of the animal?"
    animal_breed = gets.chomp
    puts "What's the gender of the animal?"
    animal_gender = gets.chomp
    puts "What's the animal's favorite toy(s) (comma separated list)"
    favorite_toys = gets.chomp.split(',').map{ |toy| toy.strip }
    new_animal = Animal.new animal_name, animal_breed, animal_gender, favorite_toys
    @shelter.add_animal new_animal
    puts @shelter.animals
    gets
  when "2" #list animals in shelter
    list_animals @shelter
    gets
  when "3" #add client
    puts "What's the  first name of the client?"
    first_name = gets.chomp
    puts "What's the second name of the client?"
    second_name = gets.chomp
    new_client = Client.new first_name, second_name
    @shelter.add_client new_client
    puts @shelter.clients
    gets
  when "4" #list registered clients
    list_clients @shelter
    gets
  when "5" #adopt an animal
    puts "Please select a client"
    list_clients @shelter
    client = @shelter.clients[gets.to_i]
    puts "Please select an animal for #{client.full_name} to adopt"
    list_animals @shelter
    animal = @shelter.remove_animal_by_index(gets.to_i)
    client.add_pet animal
    puts client
    list_clients_animals client
    gets
  when "6" #give up an animal for adoption
    puts "Please select a client"
    list_clients @shelter
    client = @shelter.clients[gets.to_i]
    puts "Please select an animal to be given up"
    list_clients_animals client
    animal = client.remove_pet_by_index(gets.to_i)
    @shelter.add_animal animal
    puts @shelter.animals
    gets
  end
  response = shelter_menu
end
