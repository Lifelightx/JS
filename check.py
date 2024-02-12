import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up the game window
width, height = 800, 300
win = pygame.display.set_mode((width, height))
pygame.display.set_caption("Infinite Dino Game")

# Set up the player character
dino_width, dino_height = 50, 50
dino_x, dino_y = 50, height - dino_height - 10

# Set up initial game variables
clock = pygame.time.Clock()

# Main game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Update game state here (e.g., move the dino)

    # Draw everything
    win.fill((255, 255, 255))  # White background
    pygame.draw.rect(win, (0, 128, 255), (dino_x, dino_y, dino_width, dino_height))  # Blue dino

    pygame.display.flip()

    # Cap the frame rate
    clock.tick(60)
                     