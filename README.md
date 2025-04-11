# 7-11-fullstack
# Backend Architecture


## Core Functional Components
1. Database Functions

    Manage all database actions (like saving or reading data).

    Make sure data is handled properly and efficiently.

2. Login & Startup Functions

    Run when the system starts.

    Check if users or devices are allowed to connect.

    Can also load settings or setup info needed to run.

3. Device Connection Checks

    Regular or manual checks to see if devices are online.

    Includes monitoring, health checks, and alerts if something goes offline.



## Event-Driven Triggers

Triggers are small pieces of logic that watch for certain events, check conditions, and then respond if needed.
Trigger Flow:

1. Event Happens

    Watches for specific actions or new data.

    Example: A temperature sensor sends new data.

2. Condition Check

    Makes sure the event meets certain rules.

    Example: Is it temperature data? Is it too high?

3. Take Action

    Does something if the conditions are met.

    Example: Save the data, send a warning, or log it.
