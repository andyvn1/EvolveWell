#!/bin/bash
# EvolveWell - Quick Setup Script
# Run this if the app didn't start automatically:
#   bash setup.sh

echo "Installing dependencies..."
npm install

echo ""
echo "Starting EvolveWell dev server..."
echo "Once it says 'Ready', click the URL or go to the PORTS tab to open the app."
echo ""
npm run dev
