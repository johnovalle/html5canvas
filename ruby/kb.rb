#encoding: utf-8
#Encoding.default_external = Encoding::UTF_8
#Encoding.default_internal = Encoding::UTF_8
meanings = []
File.open('meanings.txt', 'r').each { |line| meanings << line.chomp.split("\t") }
readings = []
File.open('yomikata2.txt', 'r').each { |line| readings << line.chomp.split("\t") }
final = []
meanings.each do |kanji|
  entry = []
  readings.each do|k2|
    if kanji[0] == k2[0]
      entry << kanji
      entry << k2
    end
  end
  
  #p entry.flatten.uniq
  final << entry.flatten.uniq
end

write_file = File.open('meaningout.txt', 'w')
final.each do |entry|
  write_file.puts entry.join("\t").gsub(/(^.*[\u30A0-\u30FF]), /, "\\1\t" )
end
write_file.close

#puts final