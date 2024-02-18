#!/bin/bash
su postgres -c "/usr/bin/pg_ctl start -w -D /var/lib/postgresql/data"
psql -U $DB_USER -d $DB_NAME -f ./setup-postgres.sql
