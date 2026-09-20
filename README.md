# Elite: Dangerous Role Playing Game for FoundryVTT

[![License](https://img.shields.io/github/license/ElSaico/edrpg-fvtt)](https://github.com/ElSaico/edrpg-fvtt/blob/main/LICENSE)

Bring the **Elite: Dangerous** universe to your tabletop with the **Elite: Dangerous Role Playing Game** by Spider Games, now available for Foundry Virtual Tabletop.

This FoundryVTT system provides the tools needed for both **players and Game Masters** to create characters, manage equipment, weapons, vehicles, ships, and explore the Elite: Dangerous RPG universe.

---

## ✨ Features

The system currently includes:

### 👤 Character Sheets

* Fully integrated player character sheets.
* Real-time character sheet updates.
* Backgrounds and enhancements.
* Karma management.
* Special abilities.
* Character equipment and weapons.
* Support for the core rules and DLC content.

### 🚗 Vehicle Sheets

* Vehicle character sheets.
* Vehicle equipment and statistics.
* Integration with the system's equipment and weapon catalog.

### 🚀 Ship Sheets

* Ship character sheets.
* Ship statistics and equipment.
* Designed to support the spacefaring gameplay of Elite: Dangerous RPG.

### 📦 Equipment Catalog

The system includes an integrated catalog containing:

* Weapons.
* Ammunition.
* Equipment.
* Core content.
* DLC content.
* Evolution V.3 content.

The catalog is designed to make it easier for Game Masters and players to manage their equipment directly from FoundryVTT.

---

# 🛠️ Installation

## Method 1 — Build from Source

If you want to build the system yourself from the source code:

### 1. Download the repository

Clone or download this repository to your computer.

```bash
git clone https://github.com/heisenlul/EDRPG-System-for-FoundryVTT.git
```

### 2. Install the dependencies

Open a terminal inside the project folder and run:

```bash
npm install
```

### 3. Build the system

Run:

```bash
npm run build
```

This will generate the production build of the system.

### 4. Copy the build to FoundryVTT

Create a new folder inside your FoundryVTT `Data/systems` directory.

For example:

```text
FoundryVTT/
└── Data/
    └── systems/
        └── edrpg/
```

Then copy the generated build files into that folder.

Example:

```bash
cp index.js style.css system.json /path/to/FoundryVTT/Data/systems/edrpg/
```

> **Note:** Replace `/path/to/FoundryVTT/` with the actual location of your FoundryVTT data directory.

### 5. Launch FoundryVTT

Start FoundryVTT and go to:

**Game Systems → Install System**

The system should now be available in your list of installed systems.

---

# 📥 Manifest Installation

If a release provides a **Manifest URL**, you can install the system directly through FoundryVTT.

Go to:

**Game Systems → Install System → Manifest URL**

Paste the system's Manifest URL and select **Install**.

> The Manifest URL must point to a valid `system.json` file hosted online.

---

# 📋 Development Status

This project is currently under active development.

### Completed

* [x] Repair old code
* [x] Add ranged weapons
* [x] Add weapon catalog
* [x] Add core and DLC equipment
* [x] Add Evolution V.3 content
* [x] Real-time character sheet updates

### In Progress

* [ ] Add melee weapons
* [ ] Repair and improve vehicle sheets
* [ ] Repair and improve ship sheets
* [ ] Add equipment such as clothing and other personal items
* [ ] Add money/credits system
* [ ] Continue upgrading and refactoring the code

---

# 🗺️ Roadmap

Future versions will focus on improving the overall gameplay experience and expanding the system with additional features, including:

* 💰 Complete credits and economy system.
* 👕 Clothing and personal equipment.
* ⚔️ Complete melee weapon system.
* 🚗 Improved vehicle management.
* 🚀 Improved ship management.
* 📖 Additional Elite: Dangerous RPG content.
* ⚙️ Code optimization and refactoring.
* 🎲 Additional automation for character and combat mechanics.
* 🔧 Improved user interface and usability.

---

# 🤝 Contributing

Contributions are welcome!

If you find a bug, have an idea, or want to contribute code, feel free to open an **Issue** or submit a **Pull Request**.

When reporting a bug, please include:

* FoundryVTT version.
* E.D.R.P.G. system version.
* Browser or application used.
* Steps required to reproduce the issue.
* Any relevant error messages from the Foundry console.

Every contribution helps improve the system and bring more of the **Elite: Dangerous RPG** experience to FoundryVTT.

---

# 🐛 Bug Reports & Suggestions

Found a problem or have an idea for a new feature?

Please open an issue on GitHub and describe what happened or what you would like to see added.

Constructive feedback is always appreciated.

---

# 📜 Credits

**Elite: Dangerous Role Playing Game** was created by **Spider Games**.

This FoundryVTT system builds upon the work of **ElSAICO**, who created the first version of the system.

Special thanks to everyone contributing ideas, testing the system, reporting bugs, and helping improve the project.

---

# 📄 License

This project is distributed under the license included in this repository.

See the [LICENSE](https://github.com/ElSaico/edrpg-fvtt/blob/main/LICENSE) file for more information.

---

## 🌌 Enjoy the Galaxy!

Create your character, equip your gear, board your ship, and start your adventure across the galaxy.

**o7 Commanders!**
