calculating = true
while(calculating)
  puts "Would you like to [add], [multiply], [divide] or [subtract]?"
  response = gets.chomp

  puts "Please choose a number"
  first_num = gets.chomp.to_f

  puts "Please choose your second number"
  second_num = gets.chomp.to_f


  case response.downcase
    when 'add'
      answer = first_num + second_num

    when 'subtract'
      answer = first_num - second_num

    when 'divide'
      answer = first_num / second_num

    when 'multiply'
        answer = first_num * second_num

  end

  puts answer

  valid = false
  while valid == false

    puts "would you like to perform another calculation? (y/n)"

    user_reply = gets.chomp

    # case user_reply.downcase

    if user_reply ==  "n"
      valid = true
      calculating = false
    elsif user_reply == "y"
      valid = true
    else
      puts "invalid answer"
    # else
    #   question
    end

  end

end
