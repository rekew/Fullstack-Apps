import asyncpg
import asyncio

pool = None

async def Database():
    global pool
    pool = await asyncpg.create_pool(
        user = 'postgres',
        password='Kbtu2013',
        database='rekewka',
        host='localhost',
        port=5432
    )

    async with pool.acquire() as connection:
        await connection.execute('''
            CREATE TABLE IF NOT EXISTS users(
                email TEXT UNIQUE,
                fullname TEXT,
                password TEXT                     
            );
        ''')

async def Close():
    async with pool.acquire() as connection:
        connection.close()

async def UserRegister(email, fullname, password):
    async with pool.acquire() as connection:
        await connection.execute('''
            INSERT INTO users(email, fullname, password) VALUES($1, $2, $3)
        ''', email, fullname, password)


