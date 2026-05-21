### create dump
```
docker exec -t postgres pg_dump -U postgres react_data_ews_dump07082025  > my_db_dump.sql
```


### restore 
```
docker exec -i postgres createdb -U postgres RESTORED_DB
docker exec -i postgres psql -U postgres -d RESTORED_DB < my_db_dump.sql
```
