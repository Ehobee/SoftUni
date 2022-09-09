function solve(arr, entry, rating) {

    let entryPointx = entry;
    let typeOfRating = rating;
    let leftSUm = 0;
    let rightSUm = 0;
    let position = arr[entryPoint];

    let left = arr.slice(0, entryPoint);
    let right = arr.slice(entryPoint + 1);

    if (priceRating == "cheap") {
        if (typeOfRating == "positive") {
            for (let i = 0; i < entryPoint; i++)
            {
                if (priceRatings[i] > 0 && priceRatings[i] < priceRatings[entryPoint]) leftDamage += priceRatings[i];
            }
            for (let i = entryPoint + 1; i < priceRatings.Length - 1; i++)
            {
                if (priceRatings[i] > 0 && priceRatings[i] < priceRatings[entryPoint]) rightDamage += priceRatings[i];
            }
        }
        else if (typeOfRating == "negative") {
            for (let i = 0; i < entryPoint; i++)
            {
                if (priceRatings[i] < 0 && priceRatings[i] < priceRatings[entryPoint]) leftDamage += priceRatings[i];
            }
            for (let i = entryPoint + 1; i < priceRatings.Length - 1; i++)
            {
                if (priceRatings[i] < 0 && priceRatings[i] < priceRatings[entryPoint]) rightDamage += priceRatings[i];
            }
        }
        else if (typeOfRating == "all") {
            for (let i = 0; i < entryPoint; i++)
            {
                if (priceRatings[i] < priceRatings[entryPoint]) leftDamage += priceRatings[i];
            }
            for (let i = entryPoint + 1; i < priceRatings.Length - 1; i++)
            {
                if (priceRatings[i] < priceRatings[entryPoint]) rightDamage += priceRatings[i];
            }
        }
    }
    else if (priceRating == "expensive") {
        if (typeOfRating == "positive") {
            for (let i = 0; i < entryPoint; i++)
            {
                if (priceRatings[i] > 0 && priceRatings[i] >= priceRatings[entryPoint]) leftDamage += priceRatings[i];
            }
            for (let i = entryPoint + 1; i < priceRatings.Length - 1; i++)
            {
                if (priceRatings[i] > 0 && priceRatings[i] >= priceRatings[entryPoint]) rightDamage += priceRatings[i];
            }
        }
        else if (typeOfRating == "negative") {
            for (let i = 0; i < entryPoint; i++)
            {
                if (priceRatings[i] < 0 && priceRatings[i] >= priceRatings[entryPoint]) leftDamage += priceRatings[i];
            }
            for (let i = entryPoint + 1; i < priceRatings.Length - 1; i++)
            {
                if (priceRatings[i] < 0 && priceRatings[i] >= priceRatings[entryPoint]) rightDamage += priceRatings[i];
            }
        }
        else if (typeOfRating == "all") {
            for (let i = 0; i < entryPoint; i++)
            {
                if (priceRatings[i] >= priceRatings[entryPoint]) leftDamage += priceRatings[i];
            }
            for(let i = entryPoint + 1; i < priceRatings.Length - 1; i++)
            {
                if (priceRatings[i] >= priceRatings[entryPoint]) rightDamage += priceRatings[i];
            }
        }
    }

    if (leftDamage >= rightDamage) {
        console.log(Left - leftDamalog)
        console.log(Right - rightDamage);
    }

}
}

}
solve(([5, 10, 12, 5, 4, 20],
    3,
    "cheap")
)