# Template Build Project

Pour construire un projet en TypeScript, voici les étapes à suivre :

1. **Initialiser le projet** : Si vous n’avez pas encore de projet, commencez par initialiser un nouveau projet npm :
    ```bash
    npm init -y
    ```

2. **Installer TypeScript** : Installez TypeScript en tant que dépendance de développement :
    ```bash
    npm install typescript --save-dev
    ```

3. **Configurer TypeScript** : Créez un fichier de configuration TypeScript (tsconfig.json) à la racine de votre projet :
    ```bash
    npx tsc --init
    ```

4. **Écrire du code TypeScript** : Créez un fichier TypeScript (par exemple, `index.ts`) et commencez à écrire votre code TypeScript.

5. **Compiler le projet** : Pour compiler votre projet TypeScript en JavaScript, utilisez la commande suivante :
    ```bash
    npx tsc
    ```

6. **Exécuter le code compilé** : Une fois le code compilé, vous pouvez exécuter le fichier JavaScript généré (par exemple, `index.js`) avec Node.js :
    ```bash
    node dist/index.js
    ```

Voici un exemple de fichier `tsconfig.json` de base :

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
