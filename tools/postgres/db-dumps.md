### create dump
```shellsession
[philipp.tiefenbacher@tiefenbacher-nb from_container]$ docker exec -t postgres pg_dump -U postgres react_data_ews_dump07082025  > my_db_dump.sql
[philipp.tiefenbacher@tiefenbacher-nb from_container]$ ls
my_db_dump.sql
[philipp.tiefenbacher@tiefenbacher-nb from_container]$
```


### restore 
```shellsession
[philipp.tiefenbacher@tiefenbacher-nb from_container]$ docker exec -i postgres createdb -U postgres RESTORED_DB
[philipp.tiefenbacher@tiefenbacher-nb from_container]$ docker exec -i postgres psql -U postgres -d RESTORED_DB < my_db_dump.sql
```
