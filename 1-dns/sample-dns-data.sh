if [ "$EUID" -ne 0 ]
  then echo "Este script de gestión solo puede ser ejecutado por el usuario root"
  exit
fi
pdnsutil create-zone $1 ns1.example.com
pdnsutil add-record $1 '' MX '25 mail.pablo.gonzalez'
pdnsutil add-record $1 www A 192.168.1.1
exit
dig +short www.$1 @127.0.0.1
dig +short $1 MX @127.0.0.1