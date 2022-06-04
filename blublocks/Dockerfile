FROM node:16.15

ENV HOME /home/bluframe
ENV SRV /srv/bluframe

# set up image
RUN mkdir -p $HOME
RUN useradd -d $HOME bluframe -s /bin/bash

# set working directory and user
WORKDIR $SRV

# add `/app/node_modules/.bin` to $PATH
ENV PATH $SRV/node_modules/.bin:$PATH

# @bluframe/blufra.me
copy .pnp.cjs .
copy .pnp.loader.mjs .
copy yarn.lock .
copy package.json .
copy .yarnrc.yml .
copy .yarn .yarn

# @bluframe/bluterrine
copy grapple grapple
run yarn workspace @bluframe/grapple build
