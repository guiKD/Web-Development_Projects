const carros = [{
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2022,
        cor: 'Prata',
        preco: 99999.99,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2023,
        cor: 'Preto',
        preco: 105000.00,
        combustivel: 'Flex',
        transmissao: 'CVT',
    },
    {
        marca: 'Ford',
        modelo: 'Mustang',
        ano: 2022,
        cor: 'Vermelho',
        preco: 150000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    },
    {
        marca: 'Chevrolet',
        modelo: 'Camaro',
        ano: 2023,
        cor: 'Amarelo',
        preco: 180000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Volkswagen',
        modelo: 'Golf',
        ano: 2022,
        cor: 'Azul',
        preco: 85000.00,
        combustivel: 'Flex',
        transmissao: 'Automática',
    },
    {
        marca: 'Tesla',
        modelo: 'Model 3',
        ano: 2023,
        cor: 'Branco',
        preco: 50000.00,
        combustivel: 'Elétrico',
        transmissao: 'Automática',
    },
    {
        marca: 'Mercedes-Benz',
        modelo: 'C-Class',
        ano: 2022,
        cor: 'Cinza',
        preco: 120000.00,
        combustivel: 'Diesel',
        transmissao: 'Automática',
    },
    {
        marca: 'Audi',
        modelo: 'A4',
        ano: 2023,
        cor: 'Verde',
        preco: 95000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Nissan',
        modelo: 'Altima',
        ano: 2022,
        cor: 'Marrom',
        preco: 90000.00,
        combustivel: 'Flex',
        transmissao: 'CVT',
    },
    {
        marca: 'Hyundai',
        modelo: 'Elantra',
        ano: 2023,
        cor: 'Roxo',
        preco: 80000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'BMW',
        modelo: 'X5',
        ano: 2023,
        cor: 'Prata',
        preco: 120000.00,
        combustivel: 'Diesel',
        transmissao: 'Automática',
    },
    {
        marca: 'Mazda',
        modelo: 'CX-5',
        ano: 2022,
        cor: 'Azul',
        preco: 95000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Kia',
        modelo: 'Seltos',
        ano: 2023,
        cor: 'Vermelho',
        preco: 80000.00,
        combustivel: 'Flex',
        transmissao: 'CVT',
    },
    {
        marca: 'Jaguar',
        modelo: 'F-PACE',
        ano: 2022,
        cor: 'Preto',
        preco: 130000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Subaru',
        modelo: 'Outback',
        ano: 2023,
        cor: 'Verde',
        preco: 100000.00,
        combustivel: 'Gasolina',
        transmissao: 'CVT',
    },
    {
        marca: 'Porsche',
        modelo: '911',
        ano: 2022,
        cor: 'Amarelo',
        preco: 180000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Lexus',
        modelo: 'RX',
        ano: 2023,
        cor: 'Branco',
        preco: 110000.00,
        combustivel: 'Híbrido',
        transmissao: 'CVT',
    },
    {
        marca: 'Land Rover',
        modelo: 'Discovery',
        ano: 2022,
        cor: 'Cinza',
        preco: 150000.00,
        combustivel: 'Diesel',
        transmissao: 'Automática',
    },
    {
        marca: 'Acura',
        modelo: 'MDX',
        ano: 2023,
        cor: 'Prata',
        preco: 120000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Fiat',
        modelo: 'Uno',
        ano: 2022,
        cor: 'Vermelho',
        preco: 35000.00,
        combustivel: 'Flex',
        transmissao: 'Manual',
    },
    // Mais 10 carros
    {
        marca: 'Volvo',
        modelo: 'XC90',
        ano: 2022,
        cor: 'Branco',
        preco: 130000.00,
        combustivel: 'Híbrido',
        transmissao: 'Automática',
    },
    {
        marca: 'Infiniti',
        modelo: 'Q50',
        ano: 2023,
        cor: 'Cinza',
        preco: 90000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Jeep',
        modelo: 'Cherokee',
        ano: 2022,
        cor: 'Verde',
        preco: 95000.00,
        combustivel: 'Flex',
        transmissao: 'Automática',
    },
    {
        marca: 'Alfa Romeo',
        modelo: 'Giulia',
        ano: 2023,
        cor: 'Vermelho',
        preco: 120000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Buick',
        modelo: 'Encore',
        ano: 2022,
        cor: 'Preto',
        preco: 80000.00,
        combustivel: 'Flex',
        transmissao: 'CVT',
    },
    {
        marca: 'Chrysler',
        modelo: 'Pacifica',
        ano: 2023,
        cor: 'Azul',
        preco: 35000.00,
        combustivel: 'Híbrido',
        transmissao: 'Automática',
    },
    {
        marca: 'Mitsubishi',
        modelo: 'Outlander',
        ano: 2022,
        cor: 'Prata',
        preco: 90000.00,
        combustivel: 'Gasolina',
        transmissao: 'CVT',
    },
    {
        marca: 'Lincoln',
        modelo: 'Navigator',
        ano: 2023,
        cor: 'Branco',
        preco: 150000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Genesis',
        modelo: 'G80',
        ano: 2022,
        cor: 'Dourado',
        preco: 110000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    },
    {
        marca: 'Ram',
        modelo: '1500',
        ano: 2023,
        cor: 'Cinza',
        preco: 120000.00,
        combustivel: 'Flex',
        transmissao: 'Automática',
    },
    {
        marca: 'Ford',
        modelo: 'Model T',
        ano: 1927,
        cor: 'Preto',
        preco: 3000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Chevrolet',
        modelo: 'Bel Air',
        ano: 1957,
        cor: 'Azul e Branco',
        preco: 25000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Volkswagen',
        modelo: 'Beetle',
        ano: 1965,
        cor: 'Vermelho',
        preco: 12000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Fiat',
        modelo: '500',
        ano: 1972,
        cor: 'Amarelo',
        preco: 8000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Mercedes-Benz',
        modelo: '300SL',
        ano: 1954,
        cor: 'Prata',
        preco: 95000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Cadillac',
        modelo: 'Eldorado',
        ano: 1959,
        cor: 'Rosa',
        preco: 40000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    }, {
        marca: 'Jaguar',
        modelo: 'E-Type',
        ano: 1961,
        cor: 'Verde',
        preco: 70000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Porsche',
        modelo: '356',
        ano: 1956,
        cor: 'Prata',
        preco: 60000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Chevrolet',
        modelo: 'Corvette',
        ano: 1969,
        cor: 'Laranja',
        preco: 35000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Ferrari',
        modelo: '250 GTO',
        ano: 1962,
        cor: 'Vermelho',
        preco: 18000000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Ford',
        modelo: 'Mustang Fastback',
        ano: 1968,
        cor: 'Azul',
        preco: 45000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Volkswagen',
        modelo: 'Karmann Ghia',
        ano: 1969,
        cor: 'Branco',
        preco: 15000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Chevrolet',
        modelo: 'Camaro Z28',
        ano: 1969,
        cor: 'Preto',
        preco: 55000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Mercedes-Benz',
        modelo: '190SL',
        ano: 1955,
        cor: 'Azul',
        preco: 85000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Pontiac',
        modelo: 'GTO',
        ano: 1969,
        cor: 'Vermelho',
        preco: 48000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Dodge',
        modelo: 'Charger',
        ano: 1969,
        cor: 'Laranja',
        preco: 42000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Buick',
        modelo: 'Skylark',
        ano: 1967,
        cor: 'Verde',
        preco: 25000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    }, {
        marca: 'Toyota',
        modelo: 'Land Cruiser',
        ano: 1970,
        cor: 'Bege',
        preco: 18000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Plymouth',
        modelo: 'Barracuda',
        ano: 1964,
        cor: 'Amarelo',
        preco: 32000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Nissan',
        modelo: 'Fairlady Z',
        ano: 1970,
        cor: 'Azul',
        preco: 28000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    },
    {
        marca: 'Rolls-Royce',
        modelo: 'Silver Cloud',
        ano: 1957,
        cor: 'Branco',
        preco: 120000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    }, {
        marca: 'Studebaker',
        modelo: 'Avanti',
        ano: 1963,
        cor: 'Prata',
        preco: 35000.00,
        combustivel: 'Gasolina',
        transmissao: 'Automática',
    }, {
        marca: 'Austin-Healey',
        modelo: '3000',
        ano: 1959,
        cor: 'Vermelho',
        preco: 45000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Aston Martin',
        modelo: 'DB5',
        ano: 1964,
        cor: 'Cinza',
        preco: 100000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Alfa Romeo',
        modelo: 'Spider Duetto',
        ano: 1966,
        cor: 'Verde',
        preco: 55000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Datsun',
        modelo: '240Z',
        ano: 1970,
        cor: 'Azul',
        preco: 28000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Maserati',
        modelo: 'Ghibli',
        ano: 1967,
        cor: 'Preto',
        preco: 80000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Lotus',
        modelo: 'Elan',
        ano: 1963,
        cor: 'Amarelo',
        preco: 30000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'MG',
        modelo: 'MGB',
        ano: 1969,
        cor: 'Azul',
        preco: 18000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }, {
        marca: 'Triumph',
        modelo: 'TR6',
        ano: 1973,
        cor: 'Vermelho',
        preco: 22000.00,
        combustivel: 'Gasolina',
        transmissao: 'Manual',
    }
];




